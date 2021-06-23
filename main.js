var makeSortedUnique = require("./ProblemSolvingPatterns/MultiplePointers/MakeSortedUnique");
console.time("Algorithm Time");
//Running Algorithm Here
var result = makeSortedUnique([0, 1, 1, 1, 1, 3, 4, 4, 5, 6, 6, 6, 6, 6, 7, 8, 9]);
console.timeEnd("Algorithm Time");
console.log("Result : ", result);
