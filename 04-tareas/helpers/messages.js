const colors = require('colors')
const { read } = require('fs')
const readline = require('readline')

const pausa = async () => {
  return new Promise((resolve, reject) => {
    readline
      .createInterface({
        input: process.stdin,
        output: process.stdout,
      })
      .question(
        'Presione ' + colors.green('ENTER') + ' para continuar',
        opt => {
          console.log(readline.promises)
          resolve(opt)
          //   readline.close()
        }
      )
  })
}

const mostrarMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear()
    console.log('=========================='.green)
    console.log('  Seleccione una opción'.green)
    console.log('==========================\n'.green)

    console.log(`${'1.'.green} Crear tarea`)
    console.log(`${'2.'.green} Listar tareas`)
    console.log(`${'3.'.green} Listar tareas completadas`)
    console.log(`${'4.'.green} Listar tareas pendientes`)
    console.log(`${'5.'.green} Completar tarea(s)`)
    console.log(`${'6.'.green} Borrar tarea`)
    console.log(`${'0.'.green} Salir\n`)

    const readLine = readline
      .createInterface({
        input: process.stdin,
        output: process.stdout,
      })
      .question('Seleccione una opción: ', opt => {
        //readLine.close()
        resolve(opt)
      })
  })
}

module.exports = { mostrarMenu }
