function listadoFrutas(fruta1, fruta2,...todasfrutas){

    console.log("La fruta 1 es", fruta1);
    console.log("La fruta 2 es", fruta2);
    console.log(todasfrutas);
}
listadoFrutas('fresa','cambur','patilla','durazno');

var frutas2=["piña","cereza","pera"];
///parametros SPREAD
listadoFrutas(...frutas2,'fresa','cambur','patilla');

