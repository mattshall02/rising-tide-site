import { w as slot, x as bind_props } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  let data = $$props["data"];
  $$payload.out.push(`<!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!---->`);
  bind_props($$props, { data });
}
export {
  _layout as default
};
