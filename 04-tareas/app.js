const colors = require('colors')
const { mostrarMenu } = require('./helpers/messages')

const main = async () => {
  do {
    res = await mostrarMenu()
  } while (res != '0')

  console.log('Hasta luego'.green)

  
}

main()
