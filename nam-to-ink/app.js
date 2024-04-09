import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors());

app.get('/', async (req, res) => {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url,permalink`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer {enter-your-token}",
      },
    }
  )
  const apiResponseJson = await response.json()
  res.send(apiResponseJson)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})