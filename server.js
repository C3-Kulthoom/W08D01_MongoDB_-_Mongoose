const express = require("express");
const todoModel = require("./db/models/schema");
const db = require("./db/db");
const todoRouter = require('./routers/routes/todos');

const app = express();
app.use(express.json());

app.use('/', todoRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
