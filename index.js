const server = require("./api/server.js");

const PORT = 7000;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
