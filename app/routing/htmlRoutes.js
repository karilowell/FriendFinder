let path = require("path");

function htmlRoutes(app) {
  /**************************************
   *
   * GETs Routes
   *
   **************************************/
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  // home
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}

module.exports = htmlRoutes;