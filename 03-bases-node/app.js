const { multiplicar } = require('./helpers/multiplicar')
const argv = require('./conf/yargs')


multiplicar(argv.base, argv.hasta, argv.listar)
  .then(console.log)
  .catch(console.error)
