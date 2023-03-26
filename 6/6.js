function checkValue(arr) {
    let k = +prompt("")
    arr.sort((a, b) => b - a)    // sắp xếp lại mảng arr theo thứ tự giảm dần

    return arr[k - 1]     //  giá trị lớn nhất khi này sẽ ở vị trí (1-1) tại vị trí 0 trong mảng, lớn thứ 2 sẽ là vị trí (2-1) trong mảng
}

let arr = [15, 30, 60, 20, 40, 90, 200, 180]
console.log(checkValue(arr))
