
exports.up = function(knex) {
    return knex.schema.createTable('item_comments', table => {
        table.increments()
        table.integer('user_id')
            .references('id')
            .inTable('users')
            .notNull()
        table.string('content')
            .notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('item_comments')
};
