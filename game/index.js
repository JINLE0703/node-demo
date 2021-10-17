const game = require('./game')

// let playerAction = process.argv[process.argv.length - 1]
// console.log('you choose', playerAction)
// const result = game(playerAction)

let count = 3

// 启动一个进程持续运行
process.stdin.on('data', e => {
    const playerAction = e.toString().trim()
    console.log('you choose', playerAction)

    const result = game(playerAction)

    count += result
    console.log(count)
    
    if(count === 0) {
        console.log('you are hacker, bye bye')
        process.exit()
    }
})