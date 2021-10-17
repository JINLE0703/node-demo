const geektime = require('./new-lesson')

geektime.addListener('newLesson', (res) => {
    console.log(res)
})