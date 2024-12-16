// using startwith

function checkStartWith(str, chkstr) {
  console.log(str.startsWith(chkstr));
}

function checkEndsWith(str, chkstr) {
  console.log(str.endsWith(chkstr));
}
const str = "Hello world";
checkStartWith(str, "Hello");
checkEndsWith(str, "world");
