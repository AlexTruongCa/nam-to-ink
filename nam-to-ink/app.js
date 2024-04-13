import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
dotenv.config();

// create a mini express server to call API

const app = express();
const port = 3000;
const url1 =
  "https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url,permalink";

app.use(cors());

app.get("/", async (req, res) => {
  const response = await fetch(url1, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.INSTAGRAM_TOKEN}`,
    },
  });
  const apiResponseJson = await response.json();
  res.send(apiResponseJson);
});
console.log(process.env.INSTAGRAM_TOKEN);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
