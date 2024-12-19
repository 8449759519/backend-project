import express from "express";

let app = express();

app.listen(5000, async () => {
  console.log("app is running on port 5000");
});
