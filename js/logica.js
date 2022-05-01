// window.alert("Comienza ejercicio 1, estás listo?");
// for(let x=1;x<=100;x++){
//     console.log(x);
// }
// for(let x=100;x>=1;x--){
//     console.log(x);
// }


// window.alert("Comienza ejercicio 2, estás listo?");
// let nroMenor;
// let nroMayor;
// let validaNumero;
// nroMenor=prompt("Ingrese un número:");
// validaNumero=isNaN(nroMenor);
// while(validaNumero==true){
//     window.alert("El ingreso no es un número");
//     nroMenor=prompt("Ingrese un número:");
//     validaNumero=isNaN(nroMenor);
// }
// nroMenor=parseInt(nroMenor);
// nroMayor=prompt("Ingrese un número mayor que el anterior:");
// validaNumero=isNaN(nroMayor);
// while(validaNumero==true || parseInt(nroMayor) < nroMenor){
//     window.alert("El ingreso incorrecto");
//     nroMayor=prompt("Ingrese un número mayor que el anterior:");
//     validaNumero=isNaN(nroMayor);
// }
// nroMayor=parseInt(nroMayor);
// console.log("METODO INCLUSIVO");
// for(let x=nroMenor;x<=nroMayor;x++){
//     console.log(x);
// }
// console.log("METODO EXCLUSIVO");
// for(let x=nroMenor+1;x<=nroMayor-1;x++){
//     console.log(x);
// }


// window.alert("Comienza ejercicio 3, estás listo?");
// let n;
// let validaNumero;
// n=prompt("Ingrese un número entre 1 y 10:");
// validaNumero=isNaN(n);
// while(validaNumero==true || (parseInt(n)<1 || parseInt(n)>10)){
//     window.alert("El ingreso incorrecto");
//     n=prompt("Ingrese un número entre 1 y 10:");
//     validaNumero=isNaN(n);
// }
// n=parseInt(n);
// for(let x=1;x<=10;x++){
//     console.log(n+" x "+x+" = "+(n*x));
// }


// window.alert("Comienza ejercicio 4, estás listo?");
// let n;
// let validaNumero;
// n=prompt("Ingrese un número:");
// validaNumero=isNaN(n);
// while(validaNumero==true){
//     window.alert("El ingreso incorrecto");
//     n=prompt("Ingrese un número:");
//     validaNumero=isNaN(n);
// }
// n=parseInt(n);
// for(let x=1;x<=n;x++){
//     if(!((3*x)/5==parseInt((3*x)/5))){
//         console.log(3+" x "+x+" = "+(3*x));
//     }
// }
    

// window.alert("Comienza ejercicio 5, estás listo?");
// let n;
// let contador=0;
// let validaNumero;
// for(let x=1;x<=5;x++){
//     n=prompt("Ingrese edad "+x);
//     validaNumero=isNaN(n);
//     while(validaNumero==true){
//         window.alert("El ingreso incorrecto");
//         n=prompt("Ingrese un número:");
//         validaNumero=isNaN(n);
//     }
//     n=parseInt(n);
//     if(!((n/2)==parseInt(n/2)) && (n>18)){
//         contador++;
//     }
// }
// window.alert("Hubo "+contador+" edades impares mayores a 18");


// window.alert("Comienza ejercicio 6, estás listo?");
// let n;
// let validaNumero;
// let monto;
// let ventasTotales=0;
// n=prompt("Cuántas ventas vas a ingresar? ");
// validaNumero=isNaN(n);
// while(validaNumero==true){
//     window.alert("El ingreso incorrecto");
//     n=prompt("Cuántas ventas vas a ingresar? ");
//     validaNumero=isNaN(n);
// }
// n=parseInt(n);
// for(x=1;x<=n;x++){
//     monto=prompt("Ingresa monto de venta "+x);
//     validaNumero=isNaN(monto);
//     while(validaNumero==true){
//         window.alert("El ingreso incorrecto");
//         monto=prompt("Ingresa monto de venta "+x);
//         validaNumero=isNaN(n);
//     }
//     monto=parseFloat(monto);
//     ventasTotales+=monto;
// }
// window.alert("El total de las ventas ingresadas es: "+ventasTotales);


// window.alert("Comienza ejercicio 7, estás listo?");
// let cantJugadores;
// let sumaAlturas=0;
// let altura;
// let validaNumero;
// cantJugadores=prompt("Cuántas Jugadores vas a ingresar? ");
// validaNumero=isNaN(cantJugadores);
// while(validaNumero==true){
//     window.alert("El ingreso incorrecto");
//     cantJugadores=prompt("Cuántas Jugadores vas a ingresar? ");
//     validaNumero=isNaN(cantJugadores);
// }
// cantJugadores=parseInt(cantJugadores);
// console.log(cantJugadores);
// for(x=1;x<=cantJugadores;x++){
//     altura=prompt("Ingresa Altura del Jugador "+x);
//     validaNumero=isNaN(altura);
//     while(validaNumero==true){
//         window.alert("El ingreso incorrecto");
//         altura=prompt("Ingresa Altura del Jugador "+x);
//         validaNumero=isNaN(n);
//     }
//     altura=parseFloat(altura);
//     sumaAlturas+=altura;
// }
// console.log(altura);
// console.log(cantJugadores);
// window.alert("La altura promedio de los Jugadores es: "+(sumaAlturas/cantJugadores));


// window.alert("Comienza ejercicio 8, estás listo?");
// let cantNumeros;
// let nroMayor;
// let posNumeroMayor;
// let numero;
// cantNumeros=prompt("Cuantos números enteros vas a ingresar?");
// validaNumero=isNaN(cantNumeros);
// console.log(cantNumeros);
// console.log(parseInt(cantNumeros));
// console.log(parseFloat(cantNumeros));
// while(validaNumero==true || !(parseInt(cantNumeros)==parseFloat(cantNumeros))){
//     window.alert("El ingreso incorrecto");
//     cantNumeros=prompt("Cuantos números enteros vas a ingresar?");
//     validaNumero=isNaN(cantNumeros);
// }
// cantNumeros=parseInt(cantNumeros);
// numero=prompt("1) ingresa un número entero: ");
// validaNumero=isNaN(numero);
// console.log(numero);
// console.log(parseInt(numero));
// console.log(parseFloat(numero));
// while(validaNumero==true || !(parseInt(numero)==parseFloat(numero))){
//     window.alert("El ingreso incorrecto");
//     numero=prompt("Cuantos números enteros vas a ingresar?");
//     validaNumero=isNaN(numero);
// }
// nroMayor=parseInt(numero);
// posNumeroMayor=1;
// for(let x=2;x<=cantNumeros;x++){
//     numero=prompt(x+") ingresa un número entero: ");
//     validaNumero=isNaN(numero);
//     console.log(numero);
//     console.log(parseInt(numero));
//     console.log(parseFloat(numero));
//     while(validaNumero==true || !(parseInt(numero)==parseFloat(numero))){
//         window.alert("El ingreso incorrecto");
//         numero=prompt("Cuantos números enteros vas a ingresar?");
//         validaNumero=isNaN(numero);
//     }
//     if(parseInt(numero)>nroMayor){
//         nroMayor=parseInt(numero);
//         posNumeroMayor=x;
//     }
// }
// window.alert("El número mayor fue el "+nroMayor+" y fue ingresado en la posición "+posNumeroMayor);


// window.alert("Comienza ejercicio 9, estás listo?");
// let numero;
// let validaNumero;
// let factorial=0;
// numero=prompt("ingresa un número entero para calcular su factorial: ");
// validaNumero=isNaN(numero);
// while(validaNumero==true || !(parseInt(numero)==parseFloat(numero))){
//     window.alert("El ingreso incorrecto");
//     numero=prompt("ingresa un número entero para calcular su factorial: ");
//     validaNumero=isNaN(numero);
// }
// factorial=1;
// for(let x=2;x<=numero;x++){
//     factorial*=x;
// }
// console.log(numero);
// console.log(factorial);
// window.alert(numero+"! = "+factorial);


// window.alert("Comienza ejercicio 10, estás listo?");
// let validaNumero;
// let numero;
// numero=prompt("Ingresa la nota: ");
// validaNumero=isNaN(numero);
// while(validaNumero==true || !(numero>=0 && numero<=10)){
//     window.alert("El ingreso incorrecto");
//     numero=prompt("Ingresa la nota: ");
//     validaNumero=isNaN(numero);
// }
// numero=parseFloat(numero);
// window.alert("La nota ingresada es "+numero);


window.alert("Comienza ejercicio 11, estás listo?");
let validaNumero;
let numero;
numero=prompt("Ingresa la nota: ");
validaNumero=isNaN(numero);
while(validaNumero==true || !(numero>=0 && numero<=10) || parseInt(numero)==0 || parseInt(numero)==2 || parseInt(numero)==3){
    window.alert("El ingreso incorrecto");
    numero=prompt("Ingresa la nota: ");
    validaNumero=isNaN(numero);
}
numero=parseFloat(numero);
window.alert("La nota ingresada es "+numero);
