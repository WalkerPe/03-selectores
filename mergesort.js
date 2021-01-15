function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];
  if (wholeArray.length === 1) return wholeArray;
  if (wholeArray.length % 2 === 0) {
    firstHalf = wholeArray.splice(0, wholeArray.length / 2);
    secondHalf = wholeArray;
  } else {
    firstHalf = wholeArray.splice(0, wholeArray.length / 2 + 0.5);
    secondHalf = wholeArray;
  }

  return [firstHalf, secondHalf];
}
function merge(firstHalf, secondHalf) {
  let ordered = [];
  while (firstHalf.length > 0 || secondHalf.length > 0) {
    if (firstHalf[0] < secondHalf[0] || typeof secondHalf[0] === "undefined") {
      ordered.push(firstHalf[0]);
      firstHalf.shift();
    } else {
      ordered.push(secondHalf[0]);
      secondHalf.shift();
    }
  }
  return ordered;
}
[1];
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const splitted = split(array);
  const left = splitted[0];
  const right = splitted[1];
  return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([38, 27, 43, 3, 8, 82, 10, -5, 0, 1, -58]));
