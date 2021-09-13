import express from "express";

const app = express();
const port = 3000;

app.use(express.static("Public"));

app.listen(port, () => {
  console.log("Server running on localhost:3000");
});
