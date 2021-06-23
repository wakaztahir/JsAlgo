"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaxSubArraySum_1 = require("./ProblemSolvingPatterns/SlidingWindow/MaxSubArraySum");
var makeSortedUnique = require("./ProblemSolvingPatterns/MultiplePointers/MakeSortedUnique");
console.time("Algorithm Time");
//Running Algorithm Here
var result = MaxSubArraySum_1.default([0, 1, 1, 1, 1, 3, 4, 4, 5, 6, 6, 6, 6, 6, 7, 8, 9], 3);
console.timeEnd("Algorithm Time");
console.log("Result : ", result);
