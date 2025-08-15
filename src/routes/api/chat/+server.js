// src/routes/api/chat/+server.js

import { json } from '@sveltejs/kit';
import { OPENAI_API_KEY } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON in request body' }, { status: 400 });
  }

  const messages = body?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return json({ error: 'Missing or invalid "messages" payload' }, { status: 400 });
  }

  if (!OPENAI_API_KEY) {
    console.error('Missing OPENAI_API_KEY in environment');
    return json({ error: 'Server misconfigured' }, { status: 500 });
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o', // Adjust to the model you're using
        messages
      })
    });

    const data = await res.json();
    console.log('OpenAI response data:', data);

    const reply = data.choices?.[0]?.message?.content;
    if (!reply) {
      console.error('Unexpected OpenAI response structure', data);
      return json({ error: 'Unexpected response from AI' }, { status: 500 });
    }

    return json({ reply });
  } catch (err) {
    console.error('Error while calling OpenAI API', err);
    return json({ error: 'Failed to call OpenAI API' }, { status: 502 });
  }
}