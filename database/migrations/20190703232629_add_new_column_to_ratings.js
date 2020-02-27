exports.up = function(knex, Promise) {
  return knex.schema.table("ratings", ratings => {
    ratings.integer("test_integer");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("ratings", ratings => {
    ratings.dropColumn("test_integer");
  });
};
