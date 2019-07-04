exports.seed = function(knex, Promise) {
  return knex("ratings").insert([
    { id: 1, arcade_id: 1, arcade_rating: 5, user_id: 1 },
    { id: 2, arcade_id: 2, arcade_rating: 3, user_id: 1 },
    { id: 3, arcade_id: 3, arcade_rating: 3, user_id: 1 },
    { id: 4, arcade_id: 4, arcade_rating: 1, user_id: 1 },
    { id: 5, arcade_id: 5, arcade_rating: 2, user_id: 1 },
    { id: 6, arcade_id: 1, arcade_rating: 4, user_id: 2 },
    { id: 7, arcade_id: 2, arcade_rating: 3, user_id: 2 },
    { id: 8, arcade_id: 3, arcade_rating: 2, user_id: 2 },
    { id: 9, arcade_id: 4, arcade_rating: 5, user_id: 2 },
    { id: 10, arcade_id: 5, arcade_rating: 2, user_id: 2 }
  ]);
};
