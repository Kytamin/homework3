function maximum(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

     let arr=[10,40,30,200,11]

   console.log(maximum(arr))
