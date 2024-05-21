import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/v1/users", (req, res) => {
  // res.contentType("application/json");
  // return res.status(200).send({});
});

app.get("/api/v1/users", (req, res) => {
  console.log("call");
  return res.send("Hello users!");
});

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

export default app;
