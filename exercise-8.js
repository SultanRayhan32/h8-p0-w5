// function cariPelaku(str) {
//     // you can only write your code here!
//     var count = 0;
//     for(var x = 0; x < str.length; x++){
//         if(str[x] + str[x + 1] + str[x + 2] === 'abc'){
//             count++
//         }
//     }
//     return count
//   }
  function cariPelaku(str) {
    // you can only write your code here!
    var x = str.match(/abc/g)
    return x.length
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2