let nota1 = parseInt(prompt('Ingrese la nota del primer trimestre'))
let nota2 = parseInt(prompt('Ingrese la nota del segundo trimestre'))
let nota3 = parseInt(prompt('Ingrese la nota del tercer trimestre'))
let promedio = ((nota1+nota2+nota3)/3)

if(nota1>10 && nota2>10 && nota3>10){
    console.log('Uno de los valores es mayor a 10')
} else if (promedio>=1 && promedio<=3) {
    console.log('Nota insuficiente')
} else if(promedio>=4 && promedio<=5){
    console.log('Nota regular')
} else if(promedio>=6 && promedio<=7){
    console.log('Nota buena')
} else if(promedio>=8 && promedio<=9){
    console.log('Nota muy buena')
} else if(promedio>9 && promedio<11){
    console.log('Nota sobresaliente')
} else if(nota1!=Number && nota2!=Number && nota3!=Number){
    console.log('Uno de los valores ingresados no es valido')
} else if(nota1=isNaN && nota1>=11){
    console.log('uno de los valores ingresados no es valido')
} else if(nota2=isNaN && nota2>=11){
    console.log('uno de los valores ingresados no es valido')
} else if(nota3=isNaN && nota3>=1){
    console.log('uno de los valores ingresados no es valido')
}