
const PORT = process.env.PORT || 5000
const OAUTH_TOKEN = process.env.OAUTH_TOKEN
const express = require('express')
const axios = require('axios')
const app = express()

app.use((req, res, next) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + OAUTH_TOKEN,
    }
    const url = 'https://api.spotify.com' + req.url
    console.log(url)
    return axios({url, headers}).then(response => {
        res.send(response.data)
        // return response.data.pipe(res)
    })
})

app.listen(PORT)
console.log('http://localhost:' + PORT)
