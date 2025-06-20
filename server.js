import fs from "node:fs/promises";
import express from "express";

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";

// Create http server
const app = express();

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client", { extensions: [] }));
}


// Serve HTML
app.use("*all", async (req, res, next) => {
  if (/\.(ico|png|jpg|jpeg|svg|css|js|json)$/.test(req.originalUrl)) {
    return next(); // ต้องมี next ถูกต้อง
  }

  try {
    const requestUrl = req.originalUrl.replace(base, "");
    const normalizedUrl = requestUrl.startsWith("/")
      ? requestUrl
      : "/" + requestUrl;

    const context = {
      url: normalizedUrl,
    };
    console.log("SSR: Rendering URLไำพไำ:", context.url);
    let template;
    let render;

    if (!isProduction) {
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(requestUrl, template); // ✅ FIXED
      render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const rendered = await render(context);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");
      console.log('Rendered Head:', rendered.head);  // ตรวจสอบเนื้อหาของ head
console.log('Rendered HTML:', rendered.html);  // ตรวจสอบเนื้อหาของ html

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace?.(e);
    console.error(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
