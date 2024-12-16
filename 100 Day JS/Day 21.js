//

function findMedianele(arr) {
  let n = arr.length;
  if (n % 2 == 0) {
    let sumEI = arr[n / 2];
    // console.log(sumEI);
    let sumEP = Math.ceil((n - 1) / 2);
    // console.log(arr[sumEP]);
    console.log((sumEI + sumEP) / 2);
  } else {
    let sumO = Math.ceil(n / 2);
    console.log(sumO);
  }
}

const evennum = [1, 2, 3, 4, 5, 6, 7, 8];
findMedianele(evennum);
const oddnum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
findMedianele(oddnum);
