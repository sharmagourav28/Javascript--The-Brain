// Reverse the order of words in a sentence without using the reverse() method

function reversesen(str) {
  let arr = str.split("");
  //   console.log(arr);
  let n = arr.length;
  let start = 0;
  let end = n - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  const arr1 = arr.join("");
  console.log(arr1);
}
const str = "i am gourav";
reversesen(str);
