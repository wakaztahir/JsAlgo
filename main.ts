import maxSubArraySum from "./ProblemSolvingPatterns/SlidingWindow/MaxSubArraySum";

const makeSortedUnique = require("./ProblemSolvingPatterns/MultiplePointers/MakeSortedUnique");
console.time("Algorithm Time")
//Running Algorithm Here

let result = maxSubArraySum([0, 1, 1, 1, 1, 3, 4, 4, 5, 6, 6, 6, 6, 6, 7, 8, 9],3)

console.timeEnd("Algorithm Time")

console.log("Result : ", result)
