const express = require("express");
const app = express();

// Is going to call index.js inside the loaders folder,
// that is because if a file is named index.js than it will be the first to be read
// Underneath is getting initialized inside the startServer function, look at loaders(app).
const loaders = require("./loaders");

const { PORT } = require("./config");

async function startServer() {
  // Init application loaders,
  // the app inside parantheses is probably to call the index.js file inside the loaders folder, so is required.
  loaders(app);

  // Start server
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
}

startServer();
