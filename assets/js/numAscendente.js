let numero1 = parseInt(prompt('Ingrese el primer numero'))
let numero2 = parseInt(prompt('ingrese el segundo numero'))
let numero3 = parseInt(prompt('Ingrese el tercer numero'))

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
    console.log('No es valido xd')
}else{
if(numero1>=numero2 && numero1>=numero3){
    if(numero2>=numero3){
        console.log('El orden de los numeros de forma ascendente es: ' + numero3 + ',' + numero2 + ',' + numero1)
    }else{
        console.log('El orden de los numeros de forma ascendente es: ' + numero2 + ',' + numero3 + ',' + numero1)
    }
}
if(numero2>=numero1 && numero2>=numero3){
    if(numero1>=numero3){
        console.log('El orden de los numeros de forma ascendente es: ' + numero3 + ',' + numero1 + ',' + numero2)
    }else{
        console.log('El orden de los numeros de forma ascendente es: ' + numero1 + ',' + numero3 + ',' + numero2)
    }
}
if(numero3>=numero1 && numero3>=numero2){
    if(numero2>=numero1){
        console.log('El orden de los numeros de forma ascendente es: ' + numero1 + ',' + numero2 + ',' + numero3)
    }else{
        console.log('El orden de los numeros de forma ascendente es: ' + numero2 + ',' + numero1 + ',' + numero3)
    }
}
}