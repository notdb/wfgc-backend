const router = require("express").Router();
const db = require("../database/dbConfig.js");
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

router.post("/add", async (req, res) => {
  try {
    const [id] = await Arcades.add(req.body, "id");
    const arcade = await db("arcades")
      .where({ id })
      .first();
    res.status(201).json(arcade);
  } catch (error) {
    const message = error[error.errno] || " we ran into an error";
    res.status(500).json({ message, error });
    console.log(error);
  }
});

module.exports = router;
