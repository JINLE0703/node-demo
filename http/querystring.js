const querystring = require('querystring')

console.log('URL参数字符串和参数对象转换')
console.log(querystring.parse('foo=bar&baz=qux&baz=quux&corge'))
console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }))

console.log('------------------------')
console.log('querystring已废弃')
console.log('推荐使用URLSearchParams')

let params = new URLSearchParams('foo=bar&baz=qux&baz=quux&corge')
console.log(params.get('foo'))

let params2 = new URLSearchParams({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
console.log(params2.get('baz'))
