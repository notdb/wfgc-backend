const router = require("express").Router();

const Arcades = require("./arcades-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", (req, res) => {
  Arcades.findAllArcadeInfo()
    .then(arcades => {
      res.json(arcades);
    })
    .catch(err => res.send(err));
});

// restricted put (arcade)

// restricted delete (arcade)

// restricted post (new arcade)

module.exports = router;
