function totalDigitRekursif(angka) {
    // you can only write your code here!
    var str = angka.toString();
    if(str.length === 0){
        return 0
    }
    else{
        return Number(str[0]) + totalDigitRekursif(str.slice(1))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5

// console.log(512 % 10)
