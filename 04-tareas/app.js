const colors = require('colors')
const { menu, pausa, leerInput, completarTareas, listadoTareasBorrar } = require('./helpers/inquirer')
const Tareas = require('./models/Tareas')

const main = async () => {
  const tareas = new Tareas()
  do {
    res = await menu()

    switch (res.option) {
      case '1':
        const desc = await leerInput('Descripción: ')
        tareas.crearTarea(desc)
        break
      case '2':
        tareas.listadoCompleto()
        await pausa()
        break
      case '3':
        tareas.listarPendientesCompletadas(true)
        await pausa()
        break
      case '4':
        tareas.listarPendientesCompletadas(false)
        await pausa()
        break
      case '5':
        completarTareas(tareas.listadoArr)
        await pausa()
        break
      case '6':
        console.log(tareas.listadoArr)
        await pausa()
        break
    }
  } while (res.option !== '0')

  console.log('Hasta luego'.green)
  process.exit()
}

main()
