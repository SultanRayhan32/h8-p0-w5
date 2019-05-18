function SortingRekusif (arr){
    // var str = num.toString()
    //var arr = []
    // for(var x = 0; x < str.length; x++){
    //     arr.push(str[x])
    // }
    if(arr.length === 0){
        return ''
    }
    if(arr[0] > arr[1]){
        
        var temp = arr[0]
        arr[0] = arr[1]
        arr[1] = temp
        // console.log(temp)
        // console.log(str[0])
        
        
        return arr + '' + arr.splice(3,1)
    }
}

console.log(SortingRekusif([5,4,1,7,8])) // 1,3,4,7,8


// var str = '12345678';
// var temp = 0;
// if(str[0] < str[1]){
//     temp = str[0]
//     str[0] = str[1]
//     str[1] = temp
//     console.log(temp)
// }
// str[0] = '5'
// console.log(str)