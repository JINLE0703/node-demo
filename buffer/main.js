let bin = Buffer.from('hello')

console.log(bin.toString('utf-8'))

let copyBin = Buffer.from([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ])
let sub = copyBin.slice(2)

sub[0] = 0x65
console.log('copyBin', copyBin)
console.log('sub', sub)
console.log('改变sub copyBin跟着被改变')

let copyBin2 = Buffer.from([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ])
let dup = Buffer.from(copyBin2)

dup[0] = 0x48
console.log('copyBin2', copyBin2)
console.log('dup', dup)
console.log('拷贝不会改变原数据')