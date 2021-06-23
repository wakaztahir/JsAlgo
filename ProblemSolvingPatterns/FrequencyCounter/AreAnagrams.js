/**
 * Checks if both strings are anagrams of each other
 * @param str1
 * @param str2
 * @returns {boolean}
 */
var areAnagrams = function (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    if (str1 === str2) {
        return true;
    }
    var lookup = {};
    for (var _i = 0, str1_1 = str1; _i < str1_1.length; _i++) {
        var letter = str1_1[_i];
        lookup[letter] = ++lookup[letter] || 1;
    }
    for (var _a = 0, str2_1 = str2; _a < str2_1.length; _a++) {
        var letter = str2_1[_a];
        if (!lookup[letter]) {
            return false;
        }
        else {
            lookup[letter] -= 1;
        }
    }
    return true;
};
module.exports = areAnagrams;
