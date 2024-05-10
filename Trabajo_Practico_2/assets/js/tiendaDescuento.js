let articulos = parseInt(prompt('Ingrese la cantidad de articulos que lleva'))
let precio = parseInt(prompt('Ingrese el precio'))
let total = articulos*precio
let descuento = total*0.15

switch (true) {
    case total>20000 && articulos>=10:
        console.log(`Se le aplicara un descuento del 15%, el total es: $${descuento}`)
        break;

    default:
        console.log(`Usted no aplica para el descuento, su total es: $${total}`)
        break;
}