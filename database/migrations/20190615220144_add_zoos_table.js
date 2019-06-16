exports.up = function(knex, Promise) {
  return knex.schema.createTable("arcades", function(arcades) {
    arcades.increments();

    arcades.string("arcadename", 128).notNullable();
    arcades
      .string("arcadestreet", 128)
      .notNullable()
      .unique();
    arcades.string("arcadetown", 128).notNullable();
    arcades.string("arcadestate", 2).notNullable();
    arcades.integer("arcadezipcode").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("arcades");
};
