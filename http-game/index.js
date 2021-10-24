const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

const game = require('./game')

let playerWon = 0
let lastAction = ''
let hackerTimes = 0
let isHacker = false

http.createServer((request, response) => {
    const parseUrl = url.parse(request.url)

    if (request.url === '/favicon.ico') {
        response.writeHead(200)
        response.end()
        return
    }

    if(parseUrl.pathname === '/') {
        response.writeHead(200)
        fs.createReadStream(__dirname + '/index.html').pipe(response)
    }

    if(parseUrl.pathname === '/game') {
        const query = querystring.parse(parseUrl.query)
        const playAction = query.action

        if (playAction === lastAction) {
            hackerTimes++
        } else {
            lastAction = playAction
            hackerTimes = 0
        }

        if (hackerTimes >= 3) {
            isHacker = true
            response.writeHead(400)
            response.end('你出老千！')
            return
        }

        const gameResult = game(playAction)
        
        if (playerWon >= 3 || isHacker) {
            response.writeHead(500)
            response.end('我不和你玩了！')
            return
        }

        response.writeHead(200)
        if (gameResult === 0) {
            response.end('平局啦！')
        } else if (gameResult === 1) {
            playerWon++
            response.end('你赢啦！')
        } else {
            response.end('你输啦！')
        }
        
    }
    
}).listen(3000)

console.log('server is running')