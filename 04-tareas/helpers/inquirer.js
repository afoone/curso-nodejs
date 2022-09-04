const colors = require('colors')
const inquirer = require('inquirer')

const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea`,
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas`,
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas`,
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`,
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`,
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tarea`,
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`,
      },
    ],
  },
]

const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar`,
    },
  ]
  console.log('\n')
  await inquirer.prompt(question)
}

const menu = () => {
  return new Promise((resolve, reject) => {
    console.clear()
    console.log('=========================='.green)
    console.log('  Seleccione una opción'.green)
    console.log('==========================\n'.green)

    inquirer.prompt(menuOptions).then(res => {
      resolve(res)
    })
  })
}

const leerInput = async message => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor'
        }
        return true
      },
    },
  ]
  const { desc } = await inquirer.prompt(question)
  return desc
}

const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green
    return {
      value: tarea.id,
      name: `${idx} ${tarea.nombre}`,
    }
  })
  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancelar',
  })

  console.log(choices)
  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices,
    },
  ]
  const { id } = await inquirer.prompt(preguntas)
  return id
}

const completarTareas = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green
    return {
      value: tarea.id,
      name: `${idx} ${tarea.name}`,
      checked: tarea.completadoEn ? true : false,
    }
  })
  const preguntas = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices,
    },
  ]
  const { ids } = await inquirer.prompt(preguntas)
  return ids
}

module.exports = {
  menu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  completarTareas,
}
