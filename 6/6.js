function checkValue(arr) {
    let k = +prompt("")
    arr.sort((a, b) => b - a)

    return arr[k - 1]
}

let arr = [15, 30, 60, 20, 40, 90, 200, 180]
console.log(checkValue(arr))