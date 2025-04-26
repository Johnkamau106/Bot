// server.js
const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Enable CORS for all origins
server.use(cors());

// Use default middlewares (logger, static, etc.)
server.use(middlewares);

// Serve the API
server.use(router);
server.listen(8001, () => {
  console.log('JSON Server is running at http://localhost:8001');
});
