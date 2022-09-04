const { v4: uuid } = require('uuid')

class Tarea {
  id = ''
  nombre = ''
  completado = null

  constructor() {
    this.id = uuid()
    this.completado = null
  }
}

module.exports = Tarea
