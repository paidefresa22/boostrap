//ejercicio carrito de compras
var compras = prompt ('Deseas comprar','si');


const catalogo= [
    {ID:1, Producto: 'Pera', valor: 150},
    {ID:2, Producto: 'Mango', valor: 250},
    {ID:3, Producto: 'Lechoza', valor: 350},
]


if(compras=="si"){
    mostrarCatalogo(catalogo);
}
else{
 console.log('NO QUIERO COMPRAR');
}
function mostrarCatalogo(catalogo){
    for (let i = 0; i < catalogo.length; i++){
        console.log(catalogo[i]);
        
    }
   
    var compras2 = prompt ('Ingrese un id',0);
    console.log(`haz agregado al carrito el producto con el d ${compras2}`);
}
//mostrarCatalogo(catalogo);

//console.log(mostrarCatalogo(catalogo));

var total=0;
function agregarCarrito(precio){
    return total+= precio;
}

function calcularImpuesto(total){
    return impuesto=total*1.16; //cada ves 

}

total= agregarCarrito(300);
agregarCarrito(600);
agregarCarrito(1200);

impuesto = calcularImpuesto(total)



console.log(`El total a pagar es ${total} y el total mas el impuesto es ${impuesto}`);
document.write(`El total a pagar es ${total} y el total mas el impuesto es ${impuesto}`);
console.log(impuesto);