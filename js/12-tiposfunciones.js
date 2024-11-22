//funciones de declaracion 
function suma1(a,b) {
    //cuerpo de la fuction o conjunto de instruciones que va ejecutar la funcion 
    console.log(a+b);
}
suma1(15,20);

//funciones de expresion

const suma2= function(a,b) {

    console.log(a+b);//lo que va dentro de los parentesis se llaman parametreos

}
suma2(25,45);
//asi se llama una funcion y se le pasan argumentos o valores reales 

//PLANTILLAS LITERALES 

function registro(nombre='desconocido', apellido=''){
    console.log(`${nombre} se ha registrado con exito y su apellido es ${apellido}`);
    document.write(`${nombre} se ha registrado <b>con exito y su apellido</b> es ${apellido}`);

}
registro('Karla','Perez')
