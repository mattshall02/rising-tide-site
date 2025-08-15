<script>
  export let name = 'Rising Tide AI';
  let messages = [];
  let input = '';

  async function sendMessage() {
    if (!input.trim()) return;
    messages = [...messages, { role: 'user', content: input }];
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });
    const data = await res.json();
    messages = [...messages, { role: 'assistant', content: data.reply }];
    input = '';
  }
</script>

<svelte:head>
  <title>Rising Tide AI Consulting</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-terra to-blush text-center py-16 px-6 font-peralta">
  <h1 class="text-5xl text-sage mb-4">Rising Tide AI Consulting</h1>
  <blockquote class="italic text-xl text-oatmeal mx-auto max-w-lg">
    “Come hear Uncle John’s Band… here beside the rising tide.”
  </blockquote>
</section>

<!-- Mission Section -->
<section class="relative overflow-hidden py-12 font-body">
  <div class="absolute inset-0 opacity-10">
    <img src="/skull-lineart.png" alt="" class="w-full h-full object-contain" />
  </div>
  <div class="relative px-6">
    <h2 class="text-3xl text-mustard mb-2">Our Mission</h2>
    <p class="text-sage max-w-2xl mx-auto">
      We believe in AI that flows like the tide—gentle, grounded, and ever‑transformative.
    </p>
  </div>
</section>

<!-- Wrapper -->
<div class="min-h-screen bg-blue-50 font-body">
  <header class="bg-white shadow p-4">
    <h1 class="text-2xl font-bold text-blue-800">Rising Tide AI Consulting</h1>
    <p class="text-blue-600">Helping Outer Banks businesses thrive with AI + Web</p>
  </header>

  <main class="p-6">
    <!-- Demo Chat Section -->
    <section class="mb-8">
      <h2 class="text-xl font-semibold mb-2">See Our Demo</h2>
      <div class="border border-blue-200 bg-white p-4 rounded shadow">
        <div class="mb-4 max-h-64 overflow-y-auto space-y-2">
          {#each messages as msg}
            <div class="{msg.role === 'user' ? 'text-right' : 'text-left'}">
              <p class="inline-block p-2 rounded bg-blue-100 text-sm">{msg.content}</p>
            </div>
          {/each}
        </div>
        <input
          class="w-full p-2 border rounded mt-2"
          bind:value={input}
          placeholder="Ask our demo bot anything..."
          on:keydown={(e) => e.key === 'Enter' && sendMessage()} />
      </div>
    </section>

    <!-- Services -->
    <section class="mt-10">
      <h2 class="text-xl font-semibold mb-2">Our Services</h2>
      <ul class="list-disc list-inside">
        <li>AI Chatbots & Virtual Assistants</li>
        <li>Custom Web Development</li>
        <li>AI-Enhanced Booking and FAQ Systems</li>
        <li>AI Social Content & Review Management</li>
      </ul>
    </section>

    <!-- Contact -->
    <section class="mt-10">
      <h2 class="text-xl font-semibold mb-2">Contact</h2>
      <p>Email us at: <a class="text-blue-700 underline" href="mailto:info@risingtide.dev">info@risingtide.dev</a></p>
    </section>
  </main>
</div>