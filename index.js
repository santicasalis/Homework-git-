function laCajaDePandora(numero){
    if (numero % 2 === 0) {
       return numero.toString(2);
    } else {
        return numero.toString(16);
    }
}


function constanza(){
    return{
        name: "constanza",
        age: 31,
        nacionality: "Argentina"
    }
}