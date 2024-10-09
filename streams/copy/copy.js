const fs = require("node:fs/promises");
const { buffer } = require("stream/consumers");

// Execution Time: 8s
// CPU Usage: 100% (one core)
// Memory Usage: 50MB
(async () => {
  console.time("copy");
  const destFile = await fs.open("test-copy.txt", "w");
  const result = await fs.readFile("test.txt");

  await destFile.write(result);
//   for (let i = 0; i < 10000000; i++) {
//           const buff = Buffer.from(` ${i} `, "utf-8");

//      stream.write(buff);
//   }
  console.timeEnd("copy");
})();
