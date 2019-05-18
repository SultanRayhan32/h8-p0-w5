function meleeRangedGrouping (str) {
    //your code here
    // var arr = [[],[]]
    if(str.length ===0){
      return ''
    }
    else if(str[0] === '-') {
      if(str[1] === 'R'){
        return  ' Ini ranged ' + str[0] + meleeRangedGrouping(str.slice(7))
      }
      else {
        return ' Ini melee ' + str[0] + meleeRangedGrouping(str.slice(6))
      }
    }
    else {
      // var temp = ''
      // var temp2 = []
      //   for(var x = 0; x < str.length ; x++){
      //     // if(str[x] === '-'){
      //     //   break;
      //     // }
      //     //else{
      //       temp+= str[x]
      //     //}
      //   }
        return str[0] + meleeRangedGrouping(str.slice(1))
    }
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