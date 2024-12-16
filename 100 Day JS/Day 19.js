// reversed string
function reversedString(str) {
  let newstr = str.split("");
  let n = newstr.length;
  let start = 0;
  let end = n - 1;
  while (start < end) {
    let temp = newstr[start];
    newstr[start] = newstr[end];
    newstr[end] = temp;
    start++;
    end--;
  }
  return newstr.join("");
}

const str = "Hello world";
console.log(str);
const newstr = reversedString(str);
console.log(newstr);
