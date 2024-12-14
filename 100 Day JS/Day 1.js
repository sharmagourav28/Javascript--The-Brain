// Return the longest word

function reduceLongWord(str) {
  let str1 = str.split(" ");
  //   so basically str split the item in array  like ['i','am','gourav','sharma','was']
  let newstr1 = str1.reduce(function (accum, item) {
    return accum.length > item.length ? accum : item;
  });
  console.log(newstr1);
}

function normalLongWord(str) {
  let words = str.split(" ");
  let ind = 0;
  for (let i = 0; i < words.length - 1; i++) {
    let val = words[i].length;
    // console.log(val, ind);
    ind = Math.max(val, ind);
  }
  console.log(ind);
}

function longword(str) {
  let wordsarr = str.split(" ");

  let longword = "";
  //   for (let word of wordsarr) {
  //     if (word.length > longword.length) {
  //       longword = word;
  //     }
  //   }

  for (let i = 0; i < wordsarr.length - 1; i++) {
    if (wordsarr[i].length > longword.length) {
      longword = wordsarr[i];
    }
  }
  console.log(longword);
}
const string = "I am chint sharma was good in cpp";
reduceLongWord(string); // by using an reduce function
normalLongWord(string); // bascially print the longest words length
longword(string); //without using any function
