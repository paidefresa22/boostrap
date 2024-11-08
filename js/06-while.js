let text = "";
let num1 = 5;
let num2 = 2;
let texto = "";

let resultado = num1 + num2;
texto = "El resultado de la suma es: " + resultado;
while( resultado <= 80){
    text+= "el numero a imprimir es " + resultado +"<br>";
    resultado++;
}
document.getElementById("text").innerHTML= text;
document.getElementById("resul").innerHTML =texto;


