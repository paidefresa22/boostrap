const num1 = parseInt(prompt("Introduce un para tu tabla de multiplicar ",0));
const titulo = `La tabla de multiplicar de ${num1} es:`;
document.getElementById("h1").innerHTML = titulo;



for(let i= 0; i <=10; i++){
    console.log(`${num1} * ${i} = `, num1 * i);
    const multiplicacion= num1 +* i,
    //console.log(multiplicacion);
    //resultado= `${num1} * ${i} =` , `${multi}`;
    document.write(El resultado de multiplicar" +num1+ " x " + i +  " es igual a " +multiplicacion, "</br>");
}