
exports.up = function(knex) {
    return knex.schema.createTable('items', table => {
        table.increments()
        table.integer('list_id')
            .references('id')
            .inTable('lists')
            .notNull()
        table.string('description')
            .notNull()
        table.string('title')
            .notNull()
        table.string('picture')
            .notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items')
};
