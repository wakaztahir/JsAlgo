const maxSubArraySum = (arr: number[], num: number) => {
    if (num > arr.length) {
        return null
    }

    let max = 0;
    let temp: number;

    for (let i = 0; i < num; i++) {
        max += arr[i]
    }

    temp = max;

    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i]
        max = Math.max(max, temp)
    }

    return max

    return max;
}

export default maxSubArraySum