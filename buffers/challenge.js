const { Buffer } = require('buffer');
const mermoryContainer = Buffer.alloc(3);
console.log(mermoryContainer)

mermoryContainer[0] = 0x48;
mermoryContainer[1] = 0x69;
mermoryContainer[2] = 0x21 ;

console.log(mermoryContainer.toString("utf-8"));  //Hi !
