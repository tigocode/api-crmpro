/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('discard_type', function(table) {
    table.increments('id').primary();
    table.string('categoria').notNullable();
    table.integer('quantidade_lente_caixa').notNullable();
    table.integer('tempo_descarte').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('discard_type');
};
