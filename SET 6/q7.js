// Merge and sort two sorted arrays. For example: [0, 3, 4, 31] and [4, 6, 30] should return [0, 3, 4, 4, 6, 30, 31].
function mergearr(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;
  let i = 0;
  const arr = [];
  let j = 0;
  while (i < n1 && j < n2) {
    if (str1[i] < str2[j]) {
      arr.push(str1[i]);
      i++;
    } else {
      arr.push(str2[j]);
      j++;
    }
  }

  while (i < n1) {
    arr.push(str1[i]);
    i++;
  }

  while (j < n2) {
    arr.push(str2[i]);
    j++;
  }
  return arr;
}
const str1 = [0, 3, 4, 31];
const str2 = [4, 6, 30];

console.log(mergearr(str1, str2));
