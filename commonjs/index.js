console.log('start require')
const lib = require('./lib')
// lib 默认是空对象
// 通过 exports 挂载相应输出
// 也可以通过 module.exports 指定相应输出类型结构
console.log('end require', lib)

lib.test = 'test'
// 如果模块不是通过 module.exports 输出，更改模块相应属性会同步到模块本身
// 如果通过module.exports 输出，相应的模块 exports 会失去引用，而同步 module.exports
// 总的来说 module.exports 会覆盖 exports 的对象引用
console.log(lib)