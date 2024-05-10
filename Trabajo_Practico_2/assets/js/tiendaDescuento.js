let articulos = parseInt(prompt('Ingrese la cantidad de articulos que lleva'))

let total = articulos*20000

switch (true) {
    case total>20000 && articulos>=10:
        console.log('Se le aplicara un descuento del 15%, el total es: ')
        break;

    default:
        break;
}