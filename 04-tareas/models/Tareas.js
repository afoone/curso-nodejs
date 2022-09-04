const Tarea = require('./Tarea')

class Tareas {
  _listado = []

  constructor() {
    this._listado = []
  }

  get listado() {
    return this._listado
  }

  crearTarea(desc = '') {
    const tarea = new Tarea()
    tarea.nombre = desc
    this._listado.push(tarea)
  }

  addTarea(tarea) {
    this._listado.push(tarea)
  }

  deleteTarea(id) {
    this._listado = this._listado.filter(tarea => tarea.id !== id)
  }

  toggleCompletadas(ids = []) {
    this._listado.forEach(tarea => {
      if (ids.includes(tarea.id)) {
        tarea.completado = new Date().toISOString()
      }
    })
  }

  listadoCompleto() {
    this._listado.forEach((tarea, i) => {
      const idx = `${i + 1}`.green
      const { nombre, completado } = tarea
      const estado = completado ? 'Completada'.green : 'Pendiente'.red
      console.log(`${idx} ${nombre} :: ${estado}`)
    })
  }

  listarPendientesCompletadas(completadas = true) {
    let contador = 0
    this._listado.forEach(tarea => {
      const { nombre, completado } = tarea
      const estado = completado ? 'Completada'.green : 'Pendiente'.red
      if (completadas) {
        if (completado) {
          contador += 1
          console.log(
            `${contador.toString().green} ${nombre} :: ${completado.green}`
          )
        }
      } else {
        if (!completado) {
          contador += 1
          console.log(`${contador.toString().green} ${nombre} :: ${estado}`)
        }
      }
    })
  }
}

module.exports = Tareas
