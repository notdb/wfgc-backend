exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { username: "admin", password: "abc123", admin: 1 },
    { username: "sammyboy", password: "abc123", admin: 0 }
  ]);
};
