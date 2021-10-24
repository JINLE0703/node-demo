const fs = require('fs')
const express = require('express')

const game = require('./game')

let playerWon = 0
let lastAction = ''
let hackerTimes = 0

const app = express()

app.get('/favicon.ico', (req, res) => {
    res.status(200)
    return
})

app.get('/', (req, res) => {
    // res.status(200)
    // fs.createReadStream(__dirname + '/index.html').pipe(res)
    res.sendFile(__dirname + '/index.html')
})

app.get('/game',
    (req, res, next) => {
        const playAction = req.query.action
        const gameResult = game(playAction)
        res.playAction = playAction
        res.gameResult = gameResult
        next()

    },
    (req, res) => {
        if (playerWon >= 3 || hackerTimes >= 3) {
            res.status(500)
            res.send('我不和你玩了！')
            return
        }

        if (res.playAction === lastAction) {
            hackerTimes++
        } else {
            lastAction = res.playAction
            hackerTimes = 0
        }

        if (hackerTimes >= 3) {
            res.status(400)
            res.send('你出老千！')
            return
        }

        res.status(200)
        if (res.gameResult === 0) {
            res.send('平局啦！')
        } else if (res.gameResult === 1) {
            playerWon++
            res.send('你赢啦！')
        } else {
            res.send('你输啦！')
        }
    })

app.listen(3000)

console.log('server is running')