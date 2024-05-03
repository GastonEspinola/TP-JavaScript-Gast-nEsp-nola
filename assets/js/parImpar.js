let numero = prompt('Ingrese un numero ENTERO')
console.log(numero)

if(Math.abs(numero) % 2 === 0){
    console.log('ES PAR')
} else if(Math.abs(numero) % 2 === 1){
    console.log('ES IMPAR')
} else if(numero!=Number){
    console.log('NO ES VALIDO')
}

console.log('RECUERDO: no es posible saber si un numero con coma es par o impar, solo su parte entera (si es que lo pensaste :v)')