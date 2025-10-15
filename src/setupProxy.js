const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/openai",
    createProxyMiddleware({
      target: "https://api.openai.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/openai": "", // Remove /api/openai prefix
      },
      onProxyReq: (proxyReq, req, res) => {
        // Add the OpenAI API key to the request headers
        const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
        if (apiKey) {
          proxyReq.setHeader("Authorization", `Bearer ${apiKey}`);
        }
      },
    })
  );
};
