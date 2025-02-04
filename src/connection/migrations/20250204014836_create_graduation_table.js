/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('graduation', function(table) {
    table.increments('id').primary();
    table.string('olho').notNullable();
    table.decimal('esferico').notNullable();
    table.decimal('cilindro').notNullable();
    table.decimal('eixo').notNullable();
    table.decimal('adicao').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now())

    table.integer('id_register').unsigned().notNullable();
    table.foreign('id_register').references('id').inTable('register').onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('graduation');
};
