function searchValue () {
   let arr = [1,1,4,4,2,2,2,3,1,1]
   let foundedValue
   for (let i = 0; i < arr.length; i++) {
      if (i === arr.indexOf(arr[i]) && i === arr.lastIndexOf(arr[i])) {
         foundedValue = arr[i];
         break
      } else {
         foundedValue = "not founded."
      }
   }
   return foundedValue
}
console.log(`Search value: ${searchValue()}`)