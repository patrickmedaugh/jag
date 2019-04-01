const auth = jag =>
  jag.authenticate((req, cb) => {
    return cb();
  });

module.exports = auth;
