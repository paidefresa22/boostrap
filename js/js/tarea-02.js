const num1 = parseInt(prompt("Introduce un primer numero",0));
const num2 = parseInt(prompt("Introduce un segundo numero",0));
//solicita dos numeros e imprime los valores entre ellos

for(let i = num1; i<=num2; i++){

    //console.log(`Los numeros entre ${num1} y entre ${num2}`);
    //console.log(`ED: ${i}`);
    //document.write(`ED: ${i} </br>`)
    code=`ED: ${i} </br> `;
    html.getElementById('cod').innerHTML = code;
}