function sortArr(arr) {
  let newarr = arr;

  //   console.log(arr);
  console.log("old ar", newarr);
  for (let i = 0; i < newarr.length - 1; i++) {
    for (let j = 0; j < newarr.length - 1 - i; j++) {
      if (newarr[j] > newarr[j + 1]) {
        let temp = newarr[j];
        newarr[j] = newarr[j + 1];
        newarr[j + 1] = temp;
      }
    }
  }
  console.log("newarr", newarr);
}
const arr = [8, 2, 4, 5, 1, 3, 7];
sortArr(arr);
