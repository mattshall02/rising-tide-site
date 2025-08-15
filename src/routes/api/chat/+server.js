export const POST = async ({ request }) => {
  const { messages } = await request.json();
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!apiKey) {
    console.error('OpenAI API key is missing');
    return new Response(JSON.stringify({ error: 'Server misconfigured' }), { status: 500 });
  }

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model: 'gpt-4o', messages }),
  });

  const data = await res.json();
  console.log('OpenAI response:', data);

  if (!data.choices?.[0]?.message?.content) {
    console.error('Invalid OpenAI response', data);
    return new Response(JSON.stringify({ error: 'Invalid response from AI' }), { status: 500 });
  }

  return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
    headers: { 'Content-Type': 'application/json' }
  });
};