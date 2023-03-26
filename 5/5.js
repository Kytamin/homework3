function checkTotal(arr) {

    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]

    }
    return total
}

let totalArr = []
let arr1 = [5, 2, 51, 23, 11, 55, 66, 122]
let arr2 = [11, 22, 33, 44, 55, 66, 77]
let arr3 = [12, 33, 44, 333, 555, 1, 2]
let arr4 = [88, 77, 66, 55, 44, 33, 22, 11]
total1 = checkTotal(arr1)
console.log(`mảng 1 có tổng là${total1}`)
total2 = checkTotal(arr2)
console.log(`mảng 2 có tổng là${total2}`)
total3 = checkTotal(arr3)
console.log(`mảng 3 có tổng là${total3}`)
total4 = checkTotal(arr4)
console.log(`mảng 4 có tổng là${total4}`)
totalArr.push(total1)
totalArr.push(total2)
totalArr.push(total3)
totalArr.push(total4)
totalArr.sort((a, b) => b - a)
console.log(`${totalArr[0]} là tổng  lớn nhất`)
// so sánh với các tổng của arr trên đã in ra suy ra arr3 có tổng các phần tử lớn nhất
