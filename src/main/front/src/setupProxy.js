const { createProxyMiddleware } = require('http-proxy-middleware');

// module import하기 위하여
// npm install http-proxy-middleware
// 또는 yarn add http-proxy-middleware 필수

// src/setupProxy.js 에 다음과 같이 작성
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/hello', {
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware('/list', {
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};