
exports.up = function(knex) {
    return knex.schema.createTable('lists', table => {
        table.increments()
        table.string('name')
            .notNull()
        table.string('description')
            .notNull()
        table.integer('owner_id')
            .references('id')
            .inTable('users')
            .notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('lists')
};
