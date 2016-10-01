import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import routes from './modules/routes'

var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

app.use(compression())
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
    match({ routes: routes, location: req.url },
        (err, redirect, props) => {
            const appHtml = renderToString(<RouterContext {...props} />)
            res.send(renderPage(appHtml))
        })
})

function renderPage(appHtml) {
    return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8 />
    <title>My First React Router App</title>
    <link rel=stylesheet href=/css/index.css />
    <div id=app>${appHtml}</div>
    <script src="/bundle.js" />
    `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
})
