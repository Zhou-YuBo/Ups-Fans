// Nitro 反代：/api/** → FastAPI :8000（浏览器全同源，FastAPI 免 CORS）
// 生产环境由 Nginx 承担同样转发，本文件仅为开发期便利
const TARGET = process.env.BILI_FANS_API_TARGET || "http://127.0.0.1:8000";

export default defineEventHandler(async (event) => {
  const path = event.path.replace(/^\/api/, "");
  return proxyRequest(event, TARGET + path);
});
