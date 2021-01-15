function bubbleSort(array = []) {
    
  let ordenado = false;
  while (!ordenado) {
    ordenado = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let primero = array[i];
        array[i] = array[i + 1];
        array[i + 1] = primero;
        ordenado = false;
      }
    }
  }
  return array;
}
console.log(bubbleSort([1, 2, 3]));
