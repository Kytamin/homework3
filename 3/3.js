function getPairs(arr, n, sum)
{    let temp = []
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] === sum)

                temp.push([arr[i],arr[j]])
    return temp                             // em không nghĩ ra được điều kiện để in ra 2 giá trị có khoảng cách nhỏ nhất
}

let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(getPairs(arr, arr.length, 16))