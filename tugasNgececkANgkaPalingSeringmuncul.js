var arrNumber = [1,2,3,4,4,4,1,0,19,191,1919,12,3]
var temp = []
    for(var x = 0; x < arrNumber.length; x++){
        temp.push([arrNumber[x]])
    }
    var temp2 = ''
    for(var x = 0; x < temp.length; x++){
        for(var u = x + 1; u < temp.length; u++){
            if(temp[x][0] === temp[u][0]){
                temp[x].push(temp[u][0])
                temp[u][0] = ''
            }
        }
    }
    var temp3 = []
    for(var x = 0; x < temp.length; x++){
        if(temp[x][0] !== ''){
            temp3.push(temp[x])
        }
    }
    
    for(var x = 0; x < temp3.length; x++){
        for(var u = x +1; u < temp3.length; u++){
            if(temp3[x].length < temp3[u].length){
                temp2 = temp3[x]
                temp3[x] = temp3[u]
                temp3[u] = temp2
            }
        }
    }
    console.log(temp3[0][0])