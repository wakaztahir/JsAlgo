/**
 * Checks if both strings are anagrams of each other
 * @param str1
 * @param str2
 * @returns {boolean}
 */
const areAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    if (str1 === str2) {
        return true
    }

    const lookup = {}

    for (let letter of str1) {
        lookup[letter] = ++lookup[letter] || 1
    }

    for (let letter of str2) {
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

    return true
}

module.exports = areAnagrams