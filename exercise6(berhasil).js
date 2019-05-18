function meleeRangedGrouping (str,arr,strName,kondisi) {
    //your code here
    if(arr === undefined){
        arr = [[],[]]
        strName = ''
        kondisi =  false
    }
    if(str.length == 0){
        return arr
    }
    if(str[0] !== ',' && str[0] !== '-' && kondisi !== true){
        strName+= str[0]
        return meleeRangedGrouping(str.slice(1) , arr , strName)
    }
    else if(str[0] === '-'){
        if(str[1] === 'R'){
            arr[0].push(strName)
            strName = ''
        }
        else {
            arr[1].push(strName)
            strName = ''
        }
        kondisi =  true
        return meleeRangedGrouping(str.slice(1) , arr , strName)
    }
    else if(str[0] === ','){
        kondisi = false
        strName = ''
        return meleeRangedGrouping(str.slice(1) , arr , strName)
    }
    else if(kondisi = true){
        return meleeRangedGrouping(str.slice(1) , arr , strName)
    }
    
    
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []