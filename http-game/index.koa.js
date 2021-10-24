const fs = require('fs')
const koa = require('koa')
const mount = require('koa-mount')
const game = require('./game')

let playerWon = 0
let lastAction = ''
let hackerTimes = 0

const app = new koa()
const gameKoa = new koa()
app.use(
    mount('/game', gameKoa)
)
gameKoa.use(async (ctx, next) => {
    const playAction = ctx.query.action
    const gameResult = game(playAction)
    ctx.playAction = playAction
    ctx.gameResult = gameResult

    await next()
})

gameKoa.use(async (ctx, next) => {
    if (playerWon >= 3) {
        ctx.status = 500
        ctx.body = '我不和你玩了！'
        return
    }
    await next()
    if (ctx.gameResult === 1) {
        playerWon++
    }
})

gameKoa.use(async (ctx, next) => {
    if (hackerTimes >= 3) {
        ctx.status = 500
        ctx.body = '我不和你玩了！'
        return
    }

    if (ctx.playAction === lastAction) {
        hackerTimes++
    } else {
        lastAction = ctx.playAction
        hackerTimes = 0
    }

    if (hackerTimes >= 3) {
        ctx.status = 400
        ctx.body = '你出老千！'
        return
    }
    await next()
})

gameKoa.use(async (ctx, next) => {
    ctx.status = 200
    if (ctx.gameResult === 0) {
        ctx.body = '平局啦！'
    } else if (ctx.gameResult === 1) {
        ctx.body = '你赢啦！'
    } else {
        ctx.body = '你输啦！'
    }
})

app.use(
    mount('/favicon.ico', (ctx, next) => {
        ctx.status = 200
    })
)

app.use(
    mount('/', (ctx, next) => {
        ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8')
    })
)

app.listen(3000)

console.log('server is running')