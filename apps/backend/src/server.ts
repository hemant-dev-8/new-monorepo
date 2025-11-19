import express from "express";
import path from "path";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 8443;

// Configure EJS (requirement)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

if (process.env.NODE_ENV !== "production") {
  // In dev: proxy frontend dev server
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
    })
  );
} else {
  // In prod: serve built frontend from root /dist/frontend
  const frontendDist = path.join(process.cwd(), "dist", "frontend");
  app.use(express.static(frontendDist));

  // fallback to index.html for SPA-friendly routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

// small EJS status page to show backend is alive
app.get("/status", (req, res) => {
  res.render("status", {
    port: PORT,
    env: process.env.NODE_ENV || "development",
  });
});

app.listen(PORT, () => {
  console.log(
    `Backend listening on http://localhost:${PORT} (NODE_ENV=${process.env.NODE_ENV})`
  );
});
