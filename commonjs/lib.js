console.log('hello require')

exports.hello = 'world'
exports.add = function(a, b) {
    return a + b
}

// module.exports = function() {
//     console.log('export function ')
// }

module.exports = {
    module: 'module'
}

setTimeout(() => {
    console.log(exports)
    console.log(module.exports)
}, 2000);