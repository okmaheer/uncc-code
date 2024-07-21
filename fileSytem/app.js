const fs = require('fs/promises');
(async () => {
    try {
        const commandFileHandler = await fs.open("./command.txt", "r");
        commandFileHandler.on("change",async () => {
            const size = (await commandFileHandler.stat()).size;
            const buff = Buffer.alloc(size);
            const offset = 0;
            const positiion = 0;
            const length = buff.byteLength;

             await commandFileHandler.read(buff, offset,length, positiion);
            console.log(buff.toString('utf-8'))

        })
        const watcher = fs.watch('./command.txt');
        for await (const event of watcher) {
            if (event.eventType === 'change') {
           commandFileHandler.emit('change')
            

            }
        }

    } catch (error) {
        console.error(error);
    }

})()