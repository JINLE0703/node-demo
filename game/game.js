module.exports = function (playerAction) {
    let computerAction
    let random = Math.random() * 3
    if (random < 1) {
        computerAction = 'rock'
    } else if (random > 2) {
        computerAction = 'scissor'
    } else {
        computerAction = 'paper'
    }

    if (computerAction === playerAction) {
        console.log('Draw')
        return 0
    } else if (
        (computerAction === 'rock' && playerAction === 'paper') ||
        (computerAction === 'scissor' && playerAction === 'rock') ||
        (computerAction === 'paper' && playerAction === 'scissor')
    ) {
        console.log('You win')
        return -1
    } else {
        console.log('You lose')
        return 0
    }
}