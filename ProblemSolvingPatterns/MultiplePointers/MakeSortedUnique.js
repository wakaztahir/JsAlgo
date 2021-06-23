var makeSortedUnique = function (arr1) {
    var i = 0;
    for (var j = 1; j < arr1.length; j++) {
        if (arr1[i] !== arr1[j]) {
            arr1[++i] = arr1[j];
        }
    }
    console.log("Unique Values : " + (arr1.length > 0 ? (i + 1) : i));
    return arr1;
};
module.exports = makeSortedUnique;
