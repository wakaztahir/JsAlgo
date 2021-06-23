"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxSubArraySum = function (arr, num) {
    if (num > arr.length) {
        return null;
    }
    var max = 0;
    var temp;
    for (var i = 0; i < num; i++) {
        max += arr[i];
    }
    temp = max;
    for (var i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(max, temp);
    }
    return max;
    return max;
};
exports.default = maxSubArraySum;
