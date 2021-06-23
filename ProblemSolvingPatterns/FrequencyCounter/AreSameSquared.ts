/**
 * Checks if second array contains same items squared of the first array
 * @param arr1
 * @param arr2
 * @returns {boolean}
 */
const areSameSquared = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        return false
    }

    let freqCounter1 = {}
    let freqCounter2 = {}

    for (let item of arr1) {
        freqCounter1[item] = ++freqCounter1[item] || 1
    }

    for (let item of arr2) {
        freqCounter2[item] = ++freqCounter2[item] || 1
    }

    for (let item of arr1) {
        if (!(item ** 2 in freqCounter2)) {
            return false
        }
    }

    return true;
}

module.exports = areSameSquared