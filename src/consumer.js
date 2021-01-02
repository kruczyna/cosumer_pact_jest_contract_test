const axios = require('axios')
const express = require("express")
const server = express()
const apiHost = "http://localhost:" + global.port


const getKittens = async () => {
  const res = await axios
    .get(`${apiHost}/kittens`)
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err.res
    })
  return res
}

const getKitten = async (id) => {
      const res = await axios
        .get(`${apiHost}/kittens/${id}`)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err.res
        })
    return res
}


module.exports = {
  server,
  getKittens,
  getKitten,
};
