
exports.up = function(knex) {
    return knex.schema.createTable('invites', table => {
        table.primary(['list_id', 'invitee_id']);
        table.integer('list_id')
            .references('id')
            .inTable('lists')
            .notNull()
        table.integer('invitee_id')
            .references('id')
            .inTable('users')
            .notNull()
        table.boolean('rejected')
            .defaultTo(false)
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('invites')
};
