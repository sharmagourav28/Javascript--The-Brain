// array are equal

function checkBothArray(arr1, arr2) {
  if (arr1.length != arr2.length) {
    console.log("Not equal array");
  }
  let count = 0;

  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    if (arr1[i] == arr2[i]) {
      count++;
    }
  }

  if (count == arr1.length && count == arr2.length) {
    console.log("Both array are equal");
  } else {
    console.log("Both Not Equal");
  }
}
const arr1 = [1, 0, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];
checkBothArray(arr1, arr2);
