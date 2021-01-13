const { server } = require("./kittenAPI.js")

const SERVER_PORT = 8088

server.listen(SERVER_PORT, () => {
  console.log(`Frontend running on http://localhost:${SERVER_PORT}`)
})
