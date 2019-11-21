
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('item_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('item_comments').insert([
        {user_id: 2, item_id: 1, content: 'Want It!'},
        {user_id: 3, item_id: 2, content: 'Want It!'},
        {user_id: 1, item_id: 5, content: 'Want It!'},
        {user_id: 3, item_id: 6, content: 'Want It!'},
        {user_id: 1, item_id: 7, content: 'Want It!'},
        {user_id: 2, item_id: 8, content: 'Want It!'},
      ]);
    });
};
