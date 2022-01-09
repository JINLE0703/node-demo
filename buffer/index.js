const buffer = Buffer.from('jinle');
const buffer2 = Buffer.from([1, 2, 3, 4]);

const buffer1 = Buffer.alloc(20);

console.log(buffer)
console.log(buffer2)
console.log(buffer1)

const fs = require('fs');
const protocolBuffers = require('protocol-buffers');
const schema =  protocolBuffers(fs.readFileSync(__dirname + '/test.proto', 'utf-8'));

console.log(schema);

// encode生成对于buffer
const buffer3 = schema.Column.encode({
    id: 1,
    name: 'Node.js',
    price: 80.4
});
console.log(buffer3);

// 反转译为对象
console.log(schema.Column.decode(buffer3))