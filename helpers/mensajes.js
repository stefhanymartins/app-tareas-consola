require('colors');

console.clear();

const mostrarMenu = () => {

  return new Promise(resolve => {
    console.log('======================='.rainbow);
    console.log(' Seleccione una opción ');
    console.log('=======================\n'.rainbow);

    console.log(`${'1.'.rainbow} Crear tarea`);
    console.log(`${'2.'.rainbow} Listar tareas`);
    console.log(`${'3.'.rainbow} Listar tareas completadas`);
    console.log(`${'4.'.rainbow} Listar tareas pendientes`);
    console.log(`${'5.'.rainbow} Completar tarea(s)`);
    console.log(`${'6.'.rainbow} Borrar tarea`);
    console.log(`${'0.'.rainbow} Salir \n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    readline.question('Seleccione una opción: ', (opt) => {
      readline.close();
      resolve(opt);
    })
  });
}

const pausa = () => {

  return new Promise(resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
      readline.close();
      resolve();
    })
  });
}

module.exports = {
  mostrarMenu,
  pausa
}