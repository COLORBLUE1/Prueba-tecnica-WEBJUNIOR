function ProcesarArray(array) {
  for (let i = 0; i < array.length; i++) {
    let numero = array[i];
    //Verificamos si es par o impar y multiplicamos
    if (array[i] % 2 == 0) {
      console.log(numero + " - " + " Par " + array[i] * 2);
      
    }else if (array[i] % 2 == 1) {
      console.log(numero + " - " + " Impar " + array[i] * 3);
    }
  }
}

ProcesarArray([1, 2, 3, 4]);
