// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: "http://127.0.0.1:3100/api/banner",
//       changeOrigin: true,
//       pathRewrite: {
//         "^/api": "", // 하위 url 초기화
//       },
//     })
//   );
// };
