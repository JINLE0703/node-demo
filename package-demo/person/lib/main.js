const parent = require('./parent')

exports.create = function (name) {
    return {
        name: name,
        parent: parent.create('dad', 'mon')
    }
}

exports.create2 = function (name, age) {
    return {
        name: name,
        age: age
    }
}