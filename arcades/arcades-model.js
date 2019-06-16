const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findAllArcadeInfo,
  order66,
  update
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

function add(arcade) {
  return find().insert(arcade);
}

function findById(id) {
  return db("arcades")
    .select("id", "arcadename")
    .where({ id })
    .first();
}

function order66(id) {
  return find()
    .where({ id })
    .del();
}

function update(id, changes) {
  return find()
    .where({ id })
    .update(changes, "*");
}
