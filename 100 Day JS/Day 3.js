// Count The Charater occurence in string

function countChar(str, item) {
  let n = str.length;
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    if (str[i].toLowerCase() == item || str[i].toUpperCase() == item) {
      count = count + 1;
    }
  }
  console.log(`${item} is occur ${count} times`);
}

const str = "ChalAjamerAsath";
countChar(str, "a");
