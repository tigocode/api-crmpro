/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('register', function(table) {
    table.increments('id').primary();
    table.string('produto').notNullable();
    table.string('categoria').notNullable();
    table.string('quantidade').notNullable();
    table.timestamp('data_compra').defaultTo(knex.fn.now())
    table.timestamp('data_recompra').notNullable();

    table.integer('id_user').unsigned().notNullable();
    table.foreign('id_user').references('id').inTable('users').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('register');
};
