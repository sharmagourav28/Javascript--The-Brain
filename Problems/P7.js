function checkduplicate(str) {
  let uni = [];
  for (let i = 0; i < str.length; i++) {
    if (uni.indexOf(str[i]) == -1) {
      uni.push(str[i]);
    }
  }
  console.log(uni.join(""));
}

let str = "hellohello world";

checkduplicate(str);
console.log(str);
