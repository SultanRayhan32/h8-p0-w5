function sorting(arrNumber) {
    // code di siniu
    var temp  = ''
    for(var x = 0; x < arrNumber.length; x++){
        for(var u = x + 1; u < arrNumber.length; u++){
            if(arrNumber[x] < arrNumber[u]){
                temp = arrNumber[x]
                arrNumber[x] = arrNumber[u]
                arrNumber[u] = temp
            }
        }
    }
    return arrNumber 
}
  
  function getTotal(arrNumber) {
    // code di sini
    var x  = arrNumber[0]
    var count = 0
    for(var x = 0; x < arrNumber.length; x++){
        if(arrNumber[x] === arrNumber[0]){
            count++
        }
    }
    if(arrNumber.length === 0){
        return ''
    }
    return `angka paling besar adalah ${x} dan jumlah kemunculan sebanyak ${count} kali`
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
<<<<<<< HEAD
  //''
=======
  //''
>>>>>>> 6ff6569c75dc51a315120b4e2dc7ee877a5746d4
