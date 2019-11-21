
exports.up = function(knex) {
    return knex.schema.createTable('want_its', table => {
        table.increments()
        table.integer('item_id')
            .references('id')
            .inTable('items')
            .notNull()
        table.integer('user_id')
            .references('id')
            .inTable('users')
            .notNull()
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('want_its')
};
