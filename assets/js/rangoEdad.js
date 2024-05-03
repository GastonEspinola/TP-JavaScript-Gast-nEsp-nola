let edad = prompt('Ingrese su edad para saber su categoria')
console.log(edad)

if(edad>=0 && edad<=12){
    console.log('Niño')
} else if(edad>=13 && edad<=19){
    console.log('Adolescente')
} else if(edad>= 20 && edad<=59){
    console.log('Adulto')
} else if(edad>=60 && edad<=120){
    console.log('Adulto mayor')
} else if(edad>=121){
    console.log('No se puede vivir tanto')
}else if(edad!=Number){
    console.log('Caracter ingresado no valido')
}