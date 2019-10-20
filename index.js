const testArrCorrect = [1, 3, 4, 5, 9, 10, 12, 16, 20];
const testEmpty = [1, 2, 4, 6, 8, 10, 20, 40];


const binarySearch = (sortArr, target, from, to) => {
  const start = from || 0;
  const end = to || sortArr.length;
  const length = end - start;

  if (length === 0) return false;

  if (length === 1) return sortArr[start] === target ? start : false;

  const middle = Math.floor((end - start) / 2) + start;

  if (sortArr[middle] === target) return middle;

  if (sortArr[middle] > target) {
    return binarySearch(sortArr, target, start, middle)
  } else {
    return binarySearch(sortArr, target, middle, end)
  }
};

console.log(`-------------------------`);
console.log(`index`, binarySearch(testArrCorrect, 16));
console.log(`index`, binarySearch(testArrCorrect, 3));
console.log(`empty`, binarySearch(testEmpty, 5));
console.log(`-------------------------`);
