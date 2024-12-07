function reversestr(str) {
  let arr = str.split("");
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
  return arr.join("");
}
const str = "sharmagourav";
const newstr = reversestr(str);
console.log(newstr);
