function ProcesarArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(" " + array[i]);

    if (array[i] % 2 == 0) {
      console.log("Array par "+ array[i] * 2);
    }
      if (array[i] % 2 == 1) {
        console.log("Array impar" + array[i] * 3);
      
      }
    
  }
}

ProcesarArray([1, 2, 3, 4]);
