// import dotenv from "dotenv";
// import express from "express";
// import fetch from "node-fetch";
// import cors from "cors";
// dotenv.config();

// // create a mini express server to call API

// const app = express();
// const port = 3000;
// const url1 =
//   "https://graph.instagram.com/me/media?fields=id,username,media_type,caption,media_url,permalink";

// app.use(cors());

// app.use(express.json());

// app.get("/", async (req, res) => {
//   if (req.headers.token !== process.env.VITE_CLIENT_TOKEN) {
//     res.status(401).json({ error: "Not Authorized" });
//     throw new Error("Not Authorized");
//   }

//   const response = await fetch(url1, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${process.env.INSTAGRAM_TOKEN}`,
//     },
//   });
//   const apiResponseJson = await response.json();
//   res.send(apiResponseJson);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
