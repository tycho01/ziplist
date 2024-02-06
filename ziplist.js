const zipList = (first, second) => {
  const resultArray = [];
  for (let current = 0; current < first.length; current++) {
    resultArray.push(first[current]);
    resultArray.push(second[current]);
  }
  return resultArray;
};
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

const zipListTheSimpleWay = (first, second) => _.chain(first)
  .zip(second)
  .flatten()
  .value();

console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
