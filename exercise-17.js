function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var angka2 = angka.toString()
    var count = 1;
    if(angka2.length === 1){
        return angka
    }
    else {
        for(var x = 0; x < angka2.length; x++){
            count*= Number(angka2[x])
        }
        return kaliTerusRekursif(count)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6