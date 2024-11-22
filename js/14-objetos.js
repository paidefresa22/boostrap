//const curso = {
    //nombre: 'programacion', //llave o propiedad  a la cual se ole asigna valor
    //duracion:'40 horas', //cada llave de ir separada por coma y el valor asignado con dos puntos 
    //disponible: true,
    //informacion:{
       // modulos: 15,
        //modalidad:{
        //    presencial: true,
      //      online: true,
   //     }
   // }
//}
    //console.log(curso);
    //console.log(curso.informacion);


    const carro = {
     modelo: 'BMW m5',
     tipo: 'automovil ejecutivo',
     empresaMatriz: 'BMW',
     disponible: true, 
    detalles:{
        motor: 'motor de gasolina 8 cilindros',
    velocidad:{
        velocidad1: 'de 0 a 100km/h en 3,0 segundos',
    }

    }
    }

    const{detalles:{motor},detalles, detalles:{velocidad:{velocidad1}}} = carro;
    console.log(motor);
    console.log(carro);
    console.log(velocidad1);
    //carro.descripcion='color negro'// agrego propiedades s mi objeto 
    //console.log(carro);

    //delete carro.descripcion;//borro propiedades de mi objeto 
    //console.log(carro);
    //console.log(carro.detalles);