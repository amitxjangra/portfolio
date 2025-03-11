import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, useLocation, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { Outlet as Outlet$1 } from "react-router-dom";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
}];
function Layout$1({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout: Layout$1,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Navbar = () => {
  const location = useLocation();
  console.log("location", location);
  return /* @__PURE__ */ jsxs("header", { className: "flex justify-between p-15", children: [
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("img", { className: "w-15", src: "/sign2.png" }) }),
    /* @__PURE__ */ jsxs("nav", { className: "flex animate-all", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "cursor-pointer uppercase w-30 text-center hover:border-b-2",
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/about",
          className: "cursor-pointer uppercase w-30 text-center hover:border-b-2",
          children: "About"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/works",
          className: "cursor-pointer uppercase w-30 text-center hover:border-b-2",
          children: "Works"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          className: "cursor-pointer uppercase w-30 text-center hover:border-b-2",
          children: "Contact"
        }
      )
    ] })
  ] });
};
function ButtonCircle({
  textColor,
  height,
  circleColor,
  content
}) {
  const [isHovered, setIsHovered] = useState(false);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: `flex relative uppercase cursor-pointer`,
      style: {
        color: textColor,
        height: `${height}px`
      },
      onMouseOver: () => setIsHovered(true),
      onMouseOut: () => setIsHovered(false),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `circle flex absolute z-1 rounded-[100%] hover:bg-red-500`,
            style: {
              background: circleColor,
              height: `${height}px`,
              width: isHovered ? "100%" : `${height}px`,
              borderRadius: isHovered ? "999px" : "100%",
              transition: "all 0.3s ease"
            }
          }
        ),
        content
      ]
    }
  );
}
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "flex relative w-full h-100 bg-[#141414] justify-center pt-25", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("text", { className: "text-5xl text-white font-bold pb-10", children: "Let's work together." }),
      /* @__PURE__ */ jsx(
        ButtonCircle,
        {
          textColor: "#fff",
          height: 52,
          circleColor: "#414141",
          content: /* @__PURE__ */ jsx("text", { className: "flex font-bold z-2 pl-7 pt-3.5 pr-7 pb-3.5", children: "Say Hello   →" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute flex flex-row gap-7 bottom-0 items-center", children: [
      /* @__PURE__ */ jsx("text", { className: "text-white font-thin text-xs", children: "© Amit Kumar 2025" }),
      /* @__PURE__ */ jsx("text", { children: "|" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsx("i", { className: "fa fa-facebook text-white cursor-pointer" }),
        /* @__PURE__ */ jsx("i", { className: "fa fa-instagram text-white cursor-pointer" }),
        /* @__PURE__ */ jsx("i", { className: "fa fa-github text-white cursor-pointer" }),
        /* @__PURE__ */ jsx("i", { className: "fa fa-linkedin text-white cursor-pointer" })
      ] })
    ] })
  ] });
};
const Layout = () => {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs("main", {
      children: [/* @__PURE__ */ jsx(Outlet$1, {}), " "]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const _layout = withComponentProps(Layout);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _layout
}, Symbol.toStringTag, { value: "Module" }));
const projectData = [
  { title: "project" },
  { title: "project" },
  { title: "project" },
  { title: "project" }
];
function Welcome() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 items-center relative gap-10 w-full pl-30 pr-30", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full center-heading-page", children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold text-6xl heading", children: "creative designer " }),
          /* @__PURE__ */ jsx("div", { className: "font-bold text-6xl heading", children: "& developer." }),
          /* @__PURE__ */ jsx("div", { className: "pt-5 text-[14px]", children: "Hi I'm Amit Kumar. A passionate Front End Developer based in India." }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 ", children: /* @__PURE__ */ jsx(
            ButtonCircle,
            {
              height: 52,
              circleColor: "#e5e5e5",
              content: /* @__PURE__ */ jsx("text", { className: "flex font-bold z-2 pl-7 pr-7 pt-3.5 pb-3.5", children: "See my works   →" })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "content-center", children: /* @__PURE__ */ jsxs("div", { className: "aspect-[1/0.8] max-w-[400px] lg:max-w-[600px] relative overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "relative z-10 w-full h-full place-self-center object-contain animate-bouncy speed-slow",
              src: "/right-img.png"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 w-1000 h-10 bg-[#333333]" }),
          /* @__PURE__ */ jsx("div", { className: "flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-135 w-1000 h-10 bg-[#333333]" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " pl-60 pb-40 flex gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "underline decoration-2 font-bold underline-offset-4 underline-thickness-11", children: "React" }),
        "/",
        /* @__PURE__ */ jsx("div", { className: "underline decoration-2 font-bold underline-offset-4 underline-thickness-11", children: "Redux" }),
        "/",
        /* @__PURE__ */ jsx("div", { className: "underline decoration-2 font-bold underline-offset-4 underline-thickness-11", children: "Typescript" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-10 top-[85vh] transfrom rotate-90", children: "Scroll Down →" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx("ul", { children: projectData.map((i, idx) => {
      return /* @__PURE__ */ jsxs("li", { className: "relative list-hover flex h-80 py-30 pl-30 pr-20 transition-all hover:bg-[#ffffff] hover:py-20 flex flex-row justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "text",
            {
              className: "shadow-text text-3xl font-bold",
              "data-text": (idx + 1).toString().padStart(2, "0"),
              children: (idx + 1).toString().padStart(2, "0")
            }
          ),
          i.title
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          ButtonCircle,
          {
            height: 52,
            circleColor: "#e5e5e5",
            content: /* @__PURE__ */ jsx("text", { className: "flex font-bold z-2 pl-7 pt-3.5 pr-7 pb-3.5", children: "View Projects   →" })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 border px-100 py-70 image-box", children: "content" })
      ] });
    }) }) })
  ] });
}
const index = withComponentProps(function Home() {
  return /* @__PURE__ */ jsx(Welcome, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const About = () => {
  return /* @__PURE__ */ jsx("div", {
    children: "sss"
  });
};
const about = withComponentProps(About);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/portfolio/assets/entry.client-DNIog8cg.js", "imports": ["/portfolio/assets/chunk-K6CSEXPM-Cy3PxCmV.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/portfolio/assets/root-Dm_2wgBH.js", "imports": ["/portfolio/assets/chunk-K6CSEXPM-Cy3PxCmV.js", "/portfolio/assets/with-props-auC6f4fU.js"], "css": ["/portfolio/assets/root-DhV_hO7e.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/_layout": { "id": "routes/_layout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/portfolio/assets/_layout-BgldjsZH.js", "imports": ["/portfolio/assets/with-props-auC6f4fU.js", "/portfolio/assets/chunk-K6CSEXPM-Cy3PxCmV.js", "/portfolio/assets/ButtonCircle-o1lkgiz8.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/index": { "id": "routes/index", "parentId": "routes/_layout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/portfolio/assets/index-CsM2jyvC.js", "imports": ["/portfolio/assets/with-props-auC6f4fU.js", "/portfolio/assets/chunk-K6CSEXPM-Cy3PxCmV.js", "/portfolio/assets/ButtonCircle-o1lkgiz8.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about": { "id": "routes/about", "parentId": "routes/_layout", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/portfolio/assets/about-relujx-c.js", "imports": ["/portfolio/assets/with-props-auC6f4fU.js", "/portfolio/assets/chunk-K6CSEXPM-Cy3PxCmV.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/portfolio/assets/manifest-75c985ea.js", "version": "75c985ea" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/portfolio/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/index": {
    id: "routes/index",
    parentId: "routes/_layout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/about": {
    id: "routes/about",
    parentId: "routes/_layout",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
