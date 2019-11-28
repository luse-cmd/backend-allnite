'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NoticiasSchema extends Schema {
  up () {
    this.create('noticias', (table) => {

      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT')
      table.string('titulo', 240).notNullable()
      table.text('corpo','longtext').notNullable()
      table.string('imagem', 240)
      table.string('date').notNullable()
      table.integer('categoria').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('noticias')
  }
}

module.exports = NoticiasSchema
