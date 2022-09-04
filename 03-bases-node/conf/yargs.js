const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || argv.b < 1) {
      throw 'La base tiene que ser un número positivo'
    }
    return true
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    default: 10,
    describe: 'Hasta que numero se multiplica',
  }).argv

  module.exports = argv