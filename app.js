import express from "express";
import cors from "cors";

const app = express();
const corsConfigs = {
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsConfigs));
app.options("*", cors(corsConfigs));

app.post("/api/v1/users", (req, res) => {
  res.contentType("application/json");
  return res.status(200).send({});
});

app.get("/api/v1/users", (req, res) => {
  console.log("call");
  return res.send("Hello users!");
});

app.get("/", (req, res) => {
  return res.send("Hello World bros!");
});

export default app;
