function generarNumeros() {
    var numeros = [];
    while (numeros.length < 3) {
      var numero = Math.floor(Math.random() * 99) + 1;
      if (numeros.indexOf(numero) === -1) {
        numeros.push(numero);
      }
    }
    return numeros;
  }