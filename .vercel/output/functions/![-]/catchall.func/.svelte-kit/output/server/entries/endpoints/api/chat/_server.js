const POST = async ({ request }) => {
  const { messages } = await request.json();
  const OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages
    })
  });
  const data = await response.json();
  return new Response(JSON.stringify({ reply: data.choices[0].message.content }));
};
export {
  POST
};
