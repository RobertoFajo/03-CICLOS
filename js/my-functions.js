
function pideValidaNumeroEntero(mensaje){
    let numero;
    let validaNumero;
    let error;
    let valido=0;
    numero=prompt(mensaje);
    while(valido==0){
        validaNumero=isNaN(parseFloat(numero));
        if(validaNumero==true){
            error=("ERROR!!!! No es un número. "+mensaje);
        }else{
            if((parseInt(numero)==parseFloat(numero))){
                valido=1;
            }else{
                error=("ERROR!!!! No es un número entero. "+mensaje);
            }
        }
        if(valido==0){
            numero=prompt(error);
        }
    }
    return parseInt(numero);
}


function pideValidaNumeroEnteroEntre(mensaje,n1,n2){
    let numero;
    numero=pideValidaNumeroEntero(mensaje);
    while((parseInt(numero)<n1 || parseInt(numero)>n2)){
        window.alert("El ingreso es incorrecto");
        numero=pideValidaNumeroEntero(mensaje);
    }
    return numero;
}