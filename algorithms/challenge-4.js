function sumTwoSmallestNums(arr) {
    let sum = 0;
    let sortedArr = arr.sort((a, b) => {return a-b});
    let filterArr = sortedArr.filter(filt => {return filt>=0});
    sum = filterArr[0] + filterArr[1];
    return sum;
 }
    sumTwoSmallestNums([19, 5, 42, 2, 77]);
    sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])
    sumTwoSmallestNums([2, 9, 6, -1]);
    sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]);
    sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]);
    sumTwoSmallestNums([-1, -1, 1, 1]);
    sumTwoSmallestNums([1, 1, 1, 1]);
  module.exports =sumTwoSmallestNums