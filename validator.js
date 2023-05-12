const validator = {
  isValid: function(creditCardNumber) {
  
    const arregloSoloNumeros = creditCardNumber.split("");
    arregloSoloNumeros.reverse();

    for (const indice in arregloSoloNumeros){
      arregloSoloNumeros[indice] = parseInt(arregloSoloNumeros[indice])
      if(indice % 2 === 1){
        arregloSoloNumeros[indice] = arregloSoloNumeros[indice]*2;
      }
    }
    for(const indice1 in arregloSoloNumeros){
      if(arregloSoloNumeros[indice1] > 9){
        arregloSoloNumeros[indice1] -= (10-1);
      }
    }
    let sum = 0 
    for(let i=0; i < arregloSoloNumeros.length; i++){
      sum += arregloSoloNumeros[i];
    }
    const aprobado = sum % 10 === 0;
    
    return aprobado
  },

  maskify: function(creditCardNumber) {
    const ultimosNumeros = creditCardNumber.substr(-4); // devuelve los últimos caracteres
    const ocultosNumeros = creditCardNumber.slice(0, -4).replace(/\w/g, "#");

    return ocultosNumeros + ultimosNumeros
  
 
  }
};

