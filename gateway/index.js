const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/customer", proxy("http://localhost:8100"));
app.use("/shopping", proxy("http://localhost:8300"));
app.use("/", proxy("http://localhost:8200")); //Product Service

const PORT = 8000 || 3000;
app.listen(PORT, () => {
  console.log(`Runing port number ${PORT}`);
});
