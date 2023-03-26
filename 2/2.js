let Arr = [1,2,3,4,5,6,7,8,9,10]
let sum = +prompt("điền vào tổng cho trước")
for (let i = 0; i < Arr.length - 2; i++) {
    for (let j = i + 1; j < Arr.length - 1; j++) {
        for (let k = j + 1; k < Arr.length; k++) {
            if (Arr[i] + Arr[j] + Arr[k] === sum) {
                console.log(`${Arr[i]},${Arr[j]},${Arr[k]} là 3 số cần tìm`)
            }


        }

    }

}