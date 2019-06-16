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

router.put("/:id", async (req, res) => {
  try {
    const api = await Arcades.update(req.params.id, req.body);

    if (!req.body.arcadename) {
      res.status(400).json({ message: "please add a name" });
    } else {
      res.status(200).json(api);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// restricted delete (arcade)

router.delete("/:id", async (req, res) => {
  try {
    const arcade = await Arcades.order66(req.params.id);
    res.status(200).json(arcade);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error deleting account"
    });
  }
});

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
