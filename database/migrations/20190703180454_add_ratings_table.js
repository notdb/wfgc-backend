exports.up = function(knex, Promise) {
  return knex.schema.createTable("ratings", ratings => {
    ratings.increments();

    ratings
      .integer("arcade_id")
      .notNullable()
      .references("id")
      .inTable("arcades");
    ratings.integer("arcade_rating").notNullable();
    ratings.integer("user_id").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ratings");
};
