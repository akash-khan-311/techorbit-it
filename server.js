/* eslint-disable @typescript-eslint/no-require-imports */
// const express = require("express");
// const next = require("next");

// const dev = false;
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const port = process.env.PORT || 3000;

// app.prepare().then(() => {
//   const server = express();

//   server.use((req, res) => {
//     return handle(req, res);
//   });

//   server.listen(port, () => {
//     console.log(`SSR running on port ${port}`);
//   });
// });

const { createServer } = require("http");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log(`Next js Running on Port ${process.env.PORT || 3000}`);
  });
});
