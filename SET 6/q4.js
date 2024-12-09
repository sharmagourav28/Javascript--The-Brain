// Program to reverse a string without using built-in methods.

function reversestr(str) {
  let strarr = str.split("");
  let n = strarr.length;
  let start = 0;
  let end = n - 1;
  while (start < end) {
    let temp = strarr[start];
    strarr[start] = strarr[end];
    strarr[end] = temp;
    start++;
    end--;
  }
  return strarr.join("");
}

function removedupstr(str) {
  let arr = str.split("");
  let n = arr.length;
  const starr = [];
  for (let i = 0; i < n - 1; i++) {
    console.log(arr[i]);
    if (starr.indexOf(arr[i]) == -1) {
      starr.push(arr[i]);
    }
  }
  return starr.join("");
}

const str = "chal aja";
const newstr = reversestr(str);
console.log("newtsr", newstr);
const dupstr = removedupstr(str);
console.log("dupstr", dupstr);
