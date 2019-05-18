function meleeRangedGrouping (str) {
    //your code here
    var kondisi = false
    if(str.length === 0){
     var temp = []
    //  temp.push(meleeRangedGrouping(str))
    kondisi = true
    return  meleeRangedGrouping(kondisi) 
    }
    if(str === true){
      var arr = []
      arr.push(str)
      return arr
       
    }
    if(str[0] !== 'a'){
      var arr = [];
    // arr.push(str[0]);
    var u =  arr.push(str[0])
    
    return arr + meleeRangedGrouping(str.slice(1))  
    }
   return  meleeRangedGrouping(str.slice(1))    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []

  // var arr = [[],[]]
  //   if(str.length ===0){
  //     return ''
  //   }
  //   else if(str[0] === '-') {
  //     if(str[1] === 'R'){
  //       return [[str[0]],[]]
  //     }
  //     else {
  //       return [[],[str[0]]]
  //     }
  //   }
  //   else {
  //     return str[0] + [[],[]] + meleeRangedGrouping(str.slice(1))
  //     // return str[0] + meleeRangedGrouping(str.slice(1))
  //   }

//   if(str.length === 0){
//     return ''
// }
// // if(str)
// var x = ''
// var temp =  str[0]
// var temp2 = str.substring(1)
// return [temp] + meleeRangedGrouping(temp2)


// if(str.length === 0){
//   return ''
// }
// else if(str[0] !== '-'){
//   return str[0] + meleeRangedGrouping(str.substring(1))
// }
// else if(str[0] === ',') {
// var temp = []
// // temp.push(str)
// return  meleeRangedGrouping(str.substring(1))
// }
// return  meleeRangedGrouping(str.substring(1))