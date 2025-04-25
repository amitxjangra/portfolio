import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("test", "routes/test.tsx"),
  layout("routes/_layout.tsx", [
    index("routes/index.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("eCommerce", "routes/eCommerce.tsx"),
  ]),
  route("works", "routes/works.tsx"),
] satisfies RouteConfig;
