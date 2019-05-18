function makanTerusRekursif(waktu) {
    // you can only write your code here!
    
    
    // var tampung =toString(waktu)
    if(waktu <= 0 ){
        return 0
    }
    else {
        var temp = waktu - 15
        return 1 + makanTerusRekursif(temp)
    }
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0

// //   //66 51 36 21 6 -9

// // function numberSum(num) {
// //     if(num == 1) {
// //       return 1
// //     }
// //     else {
// //         var x = num
// //         return x + numberSum(num - 1);
// //     }
// //   }
  
// //   console.log(numberSum(5)); // 5 + 4 + 3 + 2 + 1 = 15


// var x = (a) =>{
//   if(a <= 5){
//       return 0
//   }
//   else {
//       return 1 + x(a - 5)
//   }
    
// }

// console.log(x(20))// 20  - 5 = 15 - 5 = 10 - 5 = 5
// console.log(x(55))
// console.log(x(10))
// console.log(x(22))
// console.log(x(220))

