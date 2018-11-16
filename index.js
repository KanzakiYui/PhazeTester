"use strict"
const express = require('express')
const app = express()
const path = require('path')
app.use('/app', express.static(path.join(__dirname, 'build')))
app.get('/app/*', (request, response)=>{
    console.log(request.url)
    response.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.listen(process.env.PORT || 8001)