const fs = require('fs')
const colors = require('colors')

const multiplicar = async (base = 5, hasta = 10, listar=false) => {
  try {
    let salida = ''

    salida += '============\n'
    salida += `Tabla del ${base}\n`
    salida += '============\n'

    for (let index = 1; index <= hasta; index++) {
      salida += `${base}*${index} = ${base * index}\n`
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida, err => {
      console.error(err)
    })

    if (listar) {
      console.log(salida)
    }

    return colors.green('Archivo creado')
  } catch {
    throw new Error('No se pudo crear el archivo')
  }
}

module.exports = {
  multiplicar,
}
