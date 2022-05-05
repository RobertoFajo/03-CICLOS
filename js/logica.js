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
// nroMenor=pideValidaNumeroEntero("Ingrese un número entero: ")
// nroMayor=pideValidaNumeroEntero("Ingrese un número entero mayor que el anterior:");
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
// n=pideValidaNumeroEnteroEntre("Ingresa un número entero entre 1 y 10: ",1,10);
// for(let x=1;x<=10;x++){
//     console.log(n+" x "+x+" = "+(n*x));
// }


// window.alert("Comienza ejercicio 4, estás listo?");
// let n;
// n=pideValidaNumeroEntero("Ingrese un número entero: ");
// for(let x=1;x<=n;x++){
//     if(!((3*x)/5==parseInt((3*x)/5))){
//         console.log(3+" x "+x+" = "+(3*x));
//     }
// }
    

window.alert("Comienza ejercicio 5, estás listo?");
let n;
let contador=0;
let validaNumero;
for(let x=1;x<=5;x++){
    n=pideValidaNumeroEntero("Ingrese edad: ");
    if(n%2>0 && n>18){
        contador++;
    }
}
window.alert("Hubo "+contador+" edades impares mayores a 18");


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


// window.alert("Comienza ejercicio 12, estás listo?");
// let continuar;
// window.alert("************* INICIA VALIDACION CON WHILE ****************");
// continuar=prompt("Desea continuar? [S/N]");
// while(continuar!="S" && continuar!="N" && continuar!="s" && continuar!="n"){
//     window.alert("Ingreso incorrecto, intente nuevamente.");
//     continuar=prompt("Desea continuar? [S/N]");
// }
// window.alert("************* INICIA VALIDACION CON DO WHILE ****************");
// do{
//     continuar=prompt("Desea continuar? [S/N]");
//     if(continuar!="S" && continuar!="N" && continuar!="s" && continuar!="n"){
//         window.alert("Ingreso incorrecto, intente nuevamente.");
//     }
// }while(continuar!="S" && continuar!="N" && continuar!="s" && continuar!="n");
// window.alert("************* FIN DE EJERCICIO ****************");


// window.alert("Comienza ejercicio 13, estás listo?");
// let numero;
// let nroMayor;
// let nroMenor; 
// numero=prompt("Ingresa un número: ");
// validaNumero=isNaN(numero);
// while(validaNumero==true){
//     window.alert("El ingreso incorrecto");
//     numero=prompt("Ingresa un número: ");
// validaNumero=isNaN(numero);
// }
// numero=parseFloat(numero);
// nroMayor=numero;
// nroMenor=numero;
// while(numero!=0){
//     if(numero<nroMenor){
//         nroMenor=numero;
//     }else{
//         if(numero>nroMayor){
//             nroMayor=numero;
//         }
//     }
//     numero=prompt("Ingresa un número: ");
//     validaNumero=isNaN(numero);
//     while(validaNumero==true){
//         window.alert("El ingreso incorrecto");
//         numero=prompt("Ingresa un número: ");
//     validaNumero=isNaN(numero);
//     }
//     numero=parseFloat(numero);
    
// }
// window.alert("El mayor es "+nroMayor+" y el menor "+nroMenor);


// window.alert("Comienza ejercicio 14, estás listo?");
// let nombre;
// let edad;
// let contador=1;
// let nombreMasJoven;
// let edadMasJoven;
// nombre=prompt("Ingresa nombre de la persona "+contador+":")
// if(nombre!="*"){
//     edad=prompt("ingresa la edad de la persona "+contador+":");
//     validaNumero=isNaN(edad);
//     while(validaNumero==true || !(parseInt(edad)==parseFloat(edad))){
//         window.alert("El ingreso incorrecto");
//         edad=prompt("ingresa la edad de la persona "+contador+":");
//         validaNumero=isNaN(edad);
//     }
//     nombreMasJoven=nombre;
//     edadMasJoven=edad;
// }
// while(nombre!="*"){
//     contador++;
//     nombre=prompt("Ingresa nombre de la persona "+contador+":")
//     if(nombre!="*"){
//         edad=prompt("ingresa la edad de la persona "+contador+":");
//         validaNumero=isNaN(edad);
//         while(validaNumero==true || !(parseInt(edad)==parseFloat(edad))){
//             window.alert("El ingreso incorrecto");
//             edad=prompt("ingresa la edad de la persona "+contador+":");
//             validaNumero=isNaN(edad);
//         }
//         if(edad<edadMasJoven){
//             edadMasJoven=edad;
//             nombreMasJoven=nombre;
//         }  
//     }   
// }
// if(contador==1){
//     window.alert("No hubo ingresos");
// }else{
//     window.alert("La persona mas joven es "+nombreMasJoven+" con "+edadMasJoven+" años");
// }


// window.alert("Comienza ejercicio 15, estás listo?");
// let numero;
// let promedio;
// let contador=0;
// let sumaNumeros;
// numero=prompt("Ingresa un número: ");
// validaNumero=isNaN(numero);
// while(validaNumero==true){
//     window.alert("El ingreso incorrecto");
//     numero=prompt("Ingresa un número: ");
// validaNumero=isNaN(numero);
// }
// numero=parseFloat(numero);
// promedio=numero;
// sumaNumeros=numero;
// contador++;
// while(promedio<20){
//     numero=prompt("Ingresa un número: ");
//     validaNumero=isNaN(numero);
//     while(validaNumero==true){
//         window.alert("El ingreso incorrecto");
//         numero=prompt("Ingresa un número: ");
//         validaNumero=isNaN(numero);
//     }
//     numero=parseFloat(numero);
//     contador++;
//     sumaNumeros+=numero;
//     promedio=sumaNumeros/contador;
// }
// window.alert("Se ingresaron "+contador+" números");


// window.alert("Comienza ejercicio 16, estás listo?");
// let numero;
// let totalPares=0;
// let totalNumeros=0;
// let porcentaje;
// let respuesta="s"
// while(respuesta=="s" || respuesta=="S"){
//     numero=prompt("Ingresa un número entero:");
//     validaNumero=isNaN(numero);
//     while(validaNumero==true || !(parseInt(numero)==parseFloat(numero))){
//         window.alert("El ingreso incorrecto");
//         numero=prompt("Ingresa un número entero:");
//         validaNumero=isNaN(numero);
//     }
//     numero=parseInt(numero);
//     if(numero/2==parseInt(numero/2)){
//         totalPares++;
//     }
//     totalNumeros++;
//     numero=parseInt(numero);
//     respuesta=prompt("Desea continuar? [S/N]");
//     while(respuesta!="S" && respuesta!="N" && respuesta!="s" && respuesta!="n"){
//         window.alert("Ingreso incorrecto, intente nuevamente.");
//         respuesta=prompt("Desea continuar? [S/N]");
//     }
// }
// porcentaje=(totalPares/totalNumeros)*100;
// window.alert("El "+porcentaje+" de los númeeros es par");


// window.alert("Comienza ejercicio 17, estás listo?");
// let precioArticulo;
// let cantidad;
// let parcial;
// let totalTicket=0;
// let respuesta="s"
// while(respuesta=="s" || respuesta=="S"){
//     precioArticulo=prompt("Ingresa precio del artículo:");
//     validaNumero=isNaN(precioArticulo);
//     while(validaNumero==true){
//         window.alert("El ingreso incorrecto");
//         precioArticulo=prompt("Ingresa precio del artículo:");
//         validaNumero=isNaN(precioArticulo);
//     }
//     precioArticulo=parseFloat(precioArticulo);
//     cantidad=prompt("ingresa la cantidad:");
//         validaNumero=isNaN(cantidad);
//         while(validaNumero==true || !(parseInt(cantidad)==parseFloat(cantidad))){
//             window.alert("El ingreso incorrecto");
//             cantidad=prompt("ingresa la cantidad:");
//             validaNumero=isNaN(cantidad);
//         }
//     cantidad=parseInt(cantidad);
//     parcial=precioArticulo*cantidad;
//     totalTicket+=parcial;
//     respuesta=prompt("Desea continuar? [S/N]");
//     while(respuesta!="S" && respuesta!="N" && respuesta!="s" && respuesta!="n"){
//         window.alert("Ingreso incorrecto, intente nuevamente.");
//         respuesta=prompt("Desea continuar? [S/N]");
//     }
// }
// window.alert("El total de la compra es: "+totalTicket+" pesos");


// window.alert("Comienza ejercicio 18, estás listo?");
// let sueldo=0;
// let sueldoAnual=0;
// contador=1;
// while(sueldo>=0 && contador<=12){
//     sueldo=prompt("Ingresa sueldo del mes "+contador);
//     validaNumero=isNaN(sueldo);
//     while(validaNumero==true){
//         window.alert("El ingreso incorrecto");
//         sueldo=prompt("Ingresa sueldo del mes "+x);
//         sueldo=isNaN(sueldo);
//     }
//     sueldo=parseFloat(sueldo);
//     sueldoAnual+=sueldo;
//     contador++;
// }
// window.alert("El sueldo anual percibido es de $"+sueldoAnual)


// window.alert("Comienza ejercicio 19, estás listo?");
// let usuario="admin";
// let contrasena="123456";
// let usuarioIngresado;
// let ContrasenaIngresada;
// let intentos=0;
// let sale=0;
// while(!(intentos<3 && usuarioIngresado=="admin" && ContrasenaIngresada=="123456") && sale==0){
//     usuarioIngresado=prompt("Ingrese usuario:");
//     ContrasenaIngresada=prompt("Ingrese contraseña:");
//     intentos++;
//     console.log(intentos);
//     sale=0;
//     if(ContrasenaIngresada==contrasena && usuarioIngresado==usuario){
//         window.alert("Acceso concedido");
//         sale=1;
//     }else{
//         if(intentos==3){
//             window.alert("Usuario bloqueado");
//             sale=1;
//         }else{
//             window.alert("Usuario o contraseña incorrecta, intente nuevamente");
//         }
//     }
// }
// window.alert("terminó ejercicio");



