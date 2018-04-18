
const PORT = process.env.PORT || 5000
const express = require('express')
const axios = require('axios')
const app = express()

app.use((req, res, next) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQBDVFaUTU59TnKQYfWU14UVvbDa1fC8h8UsX9hf-ZRHPAHAqQNFBf4EbvuCcsshEmF37wV8L7V4ZUBQ1bdB4gYvwF-Urj06EhR9nUllHVTwZO5uIzwvPFtUcfKmWp1Qy6YQXNwMZQBwqb3Q',
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
