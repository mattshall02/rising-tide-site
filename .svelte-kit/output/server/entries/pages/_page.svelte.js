import { F as ensure_array_like, G as head, J as attr_class, z as escape_html, K as attr } from "../../chunks/index.js";
function _page($$payload) {
  let messages = [];
  let input = "";
  const each_array = ensure_array_like(messages);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Rising Tide AI Consulting</title>`;
  });
  $$payload.out.push(`<div class="min-h-screen bg-blue-50 font-sans"><header class="bg-white shadow p-4"><h1 class="text-2xl font-bold text-blue-800">Rising Tide AI Consulting</h1> <p class="text-blue-600">Helping Outer Banks businesses thrive with AI + Web</p></header> <main class="p-6"><section class="mb-8"><h2 class="text-xl font-semibold mb-2">See Our Demo</h2> <div class="border border-blue-200 bg-white p-4 rounded shadow"><div class="mb-4 max-h-64 overflow-y-auto space-y-2"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let msg = each_array[$$index];
    $$payload.out.push(`<div${attr_class(msg.role === "user" ? "text-right" : "text-left")}><p class="inline-block p-2 rounded bg-blue-100 text-sm">${escape_html(msg.content)}</p></div>`);
  }
  $$payload.out.push(`<!--]--></div> <input class="w-full p-2 border rounded mt-2"${attr("value", input)} placeholder="Ask our demo bot anything..."/></div></section> <section class="mt-10"><h2 class="text-xl font-semibold mb-2">Our Services</h2> <ul class="list-disc list-inside"><li>AI Chatbots &amp; Virtual Assistants</li> <li>Custom Web Development</li> <li>AI-Enhanced Booking and FAQ Systems</li> <li>AI Social Content &amp; Review Management</li></ul></section> <section class="mt-10"><h2 class="text-xl font-semibold mb-2">Contact</h2> <p>Email us at: <a class="text-blue-700 underline" href="mailto:info@risingtide.dev">info@risingtide.dev</a></p></section></main></div>`);
}
export {
  _page as default
};
