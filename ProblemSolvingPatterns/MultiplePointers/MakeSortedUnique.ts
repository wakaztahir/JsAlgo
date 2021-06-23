
const makeSortedUnique = (arr1) => {
    let i = 0
    for(let j=1;j<arr1.length;j++){
        if(arr1[i] !== arr1[j]){
            arr1[++i] = arr1[j]
        }
    }
    return arr1
}

module.exports = makeSortedUnique