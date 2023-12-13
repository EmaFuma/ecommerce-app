// This is the file that gets called from the index.js file in the root folder, because this is named index as well
// so the program is going to get this file first.

const expressLoader = require("./express");
const passportLoader = require("./passport");
const routeLoader = require("../routes");
const swaggerLoader = require("./swagger");

module.exports = async (app) => {
  // Here as well you pass app inside the parentheses to call the file and initialize them
  // Load Express middlewares
  const expressApp = await expressLoader(app);

  // Load Passport middleware
  const passport = await passportLoader(expressApp);

  // Load API route handlers
  await routeLoader(app, passport);

  // Load Swagger
  await swaggerLoader(app);

  // Error handler
  app.use((err, req, res, next) => {
    const { message, status } = err;
    return res.status(status).send({ message });
  });
};
