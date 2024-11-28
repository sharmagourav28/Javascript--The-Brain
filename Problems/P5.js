function checkReverse(str) {
  let start = 0;
  let end = str.length - 1;
  console.log(end);
  while (start < end) {
    let third = str[start];
    str[start] = str[end];
    str[end] = third;
    start++;
    end--;
  }
  console.log(str);
}

const mystr = "Hello world";
checkReverse(mystr);
console.log(mystr);
