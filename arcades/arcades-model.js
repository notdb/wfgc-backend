const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findAllArcadeInfo
};

function find() {
  return db("arcades").select("id", "arcadename");
}

function findAllArcadeInfo() {
  return db("arcades").select("*");
}

function findBy(filter) {
  return db("arcades").where(filter);
}

async function add(arcade) {
  const [id] = await db("arcades").insert(arcade);

  return findById(id);
}

function findById(id) {
  return db("arcades")
    .select("id", "arcadename")
    .where({ id })
    .first();
}
