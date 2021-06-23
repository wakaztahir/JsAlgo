/**
 * Checks if second array contains same items squared of the first array
 * @param arr1
 * @param arr2
 * @returns {boolean}
 */
var areSameSquared = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    var freqCounter1 = {};
    var freqCounter2 = {};
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var item = arr1_1[_i];
        freqCounter1[item] = ++freqCounter1[item] || 1;
    }
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var item = arr2_1[_a];
        freqCounter2[item] = ++freqCounter2[item] || 1;
    }
    for (var _b = 0, arr1_2 = arr1; _b < arr1_2.length; _b++) {
        var item = arr1_2[_b];
        if (!(Math.pow(item, 2) in freqCounter2)) {
            return false;
        }
    }
    return true;
};
module.exports = areSameSquared;
