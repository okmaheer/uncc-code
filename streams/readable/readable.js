const fs = require("node:fs/promises");
const { buffer } = require("stream/consumers");


(async () => {
    console.time("readmany");
    const fileHandle = await fs.open("test.txt", "r");
    const writeFileHandle = await fs.open("dist.txt", "w");
    const writeStream = writeFileHandle.createWriteStream();
    const readStream = fileHandle.createReadStream({highWaterMark: 64 * 1024});
    readStream.on('data', (chunk) => {
       if(!writeStream.write(chunk)){
        readStream.pause();
       }
    })

    writeStream.on('drain', () => {
        readStream.resume();
    })

  })();