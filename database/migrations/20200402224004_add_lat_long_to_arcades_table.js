exports.up = function(knex, Promise) {
  return knex.schema.table("arcades", arcades => {
    arcades.decimal("lat");
    arcades.decimal("long");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("arcades", arcades => {
    arcades.dropColumn("lat");
    arcades.dropColumn("long");
  });
};
