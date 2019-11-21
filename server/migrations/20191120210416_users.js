
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments()
        table.string('username')
            .unique()
            .notNull()
        table.string('email')
            .unique()
            .notNull()
        table.string('password')
            .notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
