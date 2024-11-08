function porConsola (n1,n2){
    //conjunto de instrucciones que va ejecutar esa funcion 
    console.log("La suma es"+(n1+n2));
    console.log("La resta es"+(n1-n2));
    console.log("La multiplicacion es"+(n1*n2));
    console.log("La division es"+(n1/n2));
    console.log("*********");
}
function porPantalla(n1, n2){
    document.write("la suma es "+(n1+n2)+"</br>");
    document.write("la resta es "+(n1-n2)+"</br>");
    document.write("la multiplicacion es "+(n1*n2)+"</br>");
    document.write("La division es"+(n1/n2)+"</br>");
}


function calculadora (n1,n2, mostrar=false){

    if(mostrar==false){

    porConsola(n1,n2);

}

else{
   porPantalla(n1,n2);

}

return true;
}

calculadora(5,10,true);
calculadora(25,15,false);




