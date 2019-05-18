function arrx (str,num){
    var stop =  str.length * num
    if(str.length === stop){
        return str
    }
    else{
        return str +  ' '  + arrx(str , num -1)
    }

}

console.log(arrx('abcde',10))