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
    

// window.alert("Comienza ejercicio 5, estás listo?");
// let n;
// let contador=0;
// let validaNumero;
// for(let x=1;x<=5;x++){
//     n=pideValidaNumeroEntero("Ingrese edad: ");
//     if(n%2>0 && n>18){
//         contador++;
//     }
// }
// window.alert("Hubo "+contador+" edades impares mayores a 18");


// window.alert("Comienza ejercicio 6, estás listo?");
// let n;
// let monto=0;
// let ventasTotales=0;
// n=pideValidaNumeroEntero("Cuántas ventas vas a ingresar?: ");
// for(x=1;x<=n;x++){
//     monto=pideValidaNumero("Ingresa monto de venta "+x);
//     ventasTotales+=monto;
//     }
// window.alert("El total de las ventas ingresadas es: "+ventasTotales);


// window.alert("Comienza ejercicio 7, estás listo?");
// let cantJugadores;
// let sumaAlturas=0;
// let altura;
// let validaNumero;
// cantJugadores=pideValidaNumeroEntero("Cuántas Jugadores vas a ingresar? ");
// for(x=1;x<=cantJugadores;x++){
//     altura=pideValidaNumero("Ingresa Altura del Jugador "+x);
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
// cantNumeros=pideValidaNumeroEntero("Cuantos números enteros vas a ingresar?");
// numero=pideValidaNumeroEntero("1) ingresa un número entero: ");
// nroMayor=parseInt(numero);
// posNumeroMayor=1;
// for(let x=2;x<=cantNumeros;x++){
//     numero=pideValidaNumeroEntero(x+") ingresa un número entero: ");
//     if(numero>nroMayor){
//         nroMayor=numero;
//         posNumeroMayor=x;
//     }
// }
// window.alert("El número mayor fue el "+nroMayor+" y fue ingresado en la posición "+posNumeroMayor);


// window.alert("Comienza ejercicio 9, estás listo?");
// let numero;
// let validaNumero;
// let factorial=0;
// numero=pideValidaNumeroEntero("ingresa un número entero para calcular su factorial: ");
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
// numero=pideValidaNumero("Ingresa la nota: ");
// window.alert("La nota ingresada es "+numero);


// window.alert("Comienza ejercicio 12, estás listo?");
// let continuar;
// window.alert("************* INICIA VALIDACION CON WHILE ****************");
// continuar=validaSN("Desea continuar? [S/N]");
// window.alert("************* FIN DE EJERCICIO ****************");


// window.alert("Comienza ejercicio 13, estás listo?");
// let numero;
// let nroMayor;
// let nroMenor; 
// numero=pideValidaNumero("Ingresa un número: ");
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
//     numero=pideValidaNumero("Ingresa un número: ");
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
//     edad=pideValidaNumeroEntero("ingresa la edad de la persona "+contador+":");
//     nombreMasJoven=nombre;
//     edadMasJoven=edad;
// }
// while(nombre!="*"){
//     contador++;
//     nombre=prompt("Ingresa nombre de la persona "+contador+":")
//     if(nombre!="*"){
//         edad=pideValidaNumeroEntero("ingresa la edad de la persona "+contador+":");
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
// numero=pideValidaNumero("Ingresa un número: ");
// promedio=numero;
// sumaNumeros=numero;
// contador++;
// while(promedio<20){
//     numero=pideValidaNumero("Ingresa un número: ");
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
//     numero=pideValidaNumeroEntero("Ingresa un número entero:");
//     if(numero%2==0){
//         totalPares++;
//     }
//     totalNumeros++;
//     respuesta=validaSN("Desea continuar? [S/N]");
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
//     precioArticulo=pideValidaNumero("Ingresa precio del artículo:");
//     cantidad=pideValidaNumeroEntero("ingresa la cantidad:");
//     parcial=precioArticulo*cantidad;
//     totalTicket+=parcial;
//     respuesta=validaSN("Desea continuar? [S/N]");
// }
// window.alert("El total de la compra es: "+totalTicket+" pesos");


window.alert("Comienza ejercicio 18, estás listo?");
let sueldo=0;
let sueldoAnual=0;
contador=1;
while(sueldo>=0 && contador<=12){
    sueldo=pideValidaNumero("Ingresa sueldo del mes "+contador);
    sueldoAnual+=sueldo;
    contador++;
}
window.alert("El sueldo anual percibido es de $"+sueldoAnual)


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



