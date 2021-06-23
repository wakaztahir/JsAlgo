"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxSubArraySum = function (arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        var temp = 0;
        for (var j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};
exports.default = maxSubArraySum;
