const url = require('url')

let urlObj = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash')
console.log(urlObj)

let urlStr = url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
console.log(urlStr)

console.log('----------------------')
console.log('不推荐使用 url.parse')

let URL = new url.URL('http://user:pass@host.com:8080/p/a/t/h?query=string#hash')
console.log(URL)