
function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui
    if(numero%2 == 0){
        return Number(numero.toString(2));
    }else{
        return Number(numero.toString(16));
    }
}

const Jared = () => {
    return {
        name : 'Jared Delgado',
        edad : 24,
        nacionalidad : 'Argentino'
    }
}
