const num1 = parseInt(prompt("Introduce un primere numero",0));
const num2 = parseInt(prompt("Introduce un segundo numero",0));

//console.log(num1,num2);
//console.log('Los numerosimpares entre' +num1+ 'y' + num2 + 'son: ');

console.log(`Los numeros impares entre ${num1} y ${num2} son:`);

function mostrarImpares(){
    for (let i = num1; i <= num2; i++){
    
        if(i % 2 !==0){
            console.log(i);
        }
    }
}

if(num1 > num2){
    mostrarImpares();
}
else if(num1 === num2){
    console.log('Introduce dos numeros diferentes');
}
else{
    console.log('si el numero es mayor que el 2')
}

