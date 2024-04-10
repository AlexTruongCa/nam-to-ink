import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();
const port = 3000;
const url1 =
  "https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url,permalink";

app.use(cors());

app.get("/", async (req, res) => {
  const response = await fetch(url1, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer IGQWRQV01nMUJLaG82ZAkR3TGJwWUpJMUVsc043ZAkVuTVU0QTlDazVrSXFIT1BtLUtHQXNsOGc1bnhvRFVmRFRNNVlIT3RLb1ZAacUNwdkNXT0NfbjBOTXZA3WTZAMN244SVNnLVdCdzFRaXBVVUFhaldaRnQ3RW1LT0UZD",
    },
  });
  const apiResponseJson = await response.json();
  res.send(apiResponseJson);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
