const fs = require('fs/promises');
(async () => {
    try {
        const commandFileHandler = await fs.open("./command.txt", "r");

        const watcher = fs.watch('./command.txt');
        for await (const event of watcher) {
            if (event.eventType === 'change') {
                console.log('file is changed')
                const size = (await commandFileHandler.stat()).size;
                const buff = Buffer.alloc(size);
                const offset = 0;
                const positiion = 0;
                const length = buff.byteLength;

                const content = await commandFileHandler.read(buff, offset,length, positiion);
                console.log(content)

            }
        }

    } catch (error) {
        console.error(error);
    }

})()