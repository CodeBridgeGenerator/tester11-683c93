const users = require("./users/users.service.js");
const string = require("./string/string.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(string);
    // ~cb-add-configure-service-name~
};
