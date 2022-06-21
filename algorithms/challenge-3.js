function sumMix(arr) {
  let sum = 0;
  let arrNum = arr.map((elem) => {
    return parseInt(elem);
  });
  let arrSum = arrNum.map((item) => {
    return (sum += item);
  });
  const total = arrSum.pop();
  return total;
}
sumMix([9, 3, "7", "3"]);
sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]);
sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]);
sumMix([1, "5", 6, 7]);
sumMix([10, 60, "80", 10]);
sumMix(["1", 2, 3, "9", 10]);
sumMix(["5", 6, "7"]);
module.exports = sumMix;
