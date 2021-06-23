const maxSubArraySum = (arr: number[], num: number) => {
    if (num > arr.length) {
        return null
    }
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        let temp = 0
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max;
}

export default maxSubArraySum