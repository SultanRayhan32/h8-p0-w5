function changeVocals (str) {
    //code di sini
    
    var arrKecil = [['a','b'],['i','j'],['u','v'],['e','f'],['o','p']];
    var arrBesar = [['A','B'],['I','J'],['U','V'],['E','F'],['O','P']];
    var temp = [];
    var hasil = ''
    for(var x = 0; x < str.length; x++){
        temp.push(str[x])
        for(var u = 0 ; u < arrBesar.length; u++){
            if(temp[x] === arrBesar[u][0]){
                temp[x] = arrBesar[u][1]
            }
            else if(temp[x] === arrKecil[u][0]){
                temp[x] = arrKecil[u][1]
            }
        }
        hasil += temp[x]
    }
    return hasil
  }
  
  function reverseWord (str) {
    //code di sini
    var temp = ''
    for(var u = str.length -1; u >= 0; u--){
        temp+= str[u]
    }
    return temp
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var alphabet2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var temp = ''
    var temp2 = []
    var angka = -1;
    for(var x = 0; x < str.length; x++){
        if(str[x] === ' '){
            // temp2.push(x)
            angka = x;
        }
        for(var u = 0; u < alphabet.length; u++){
            
            if(str[x] === alphabet[u]){
                temp += alphabet2[u]
                
            }
            else if(str[x] === alphabet2[u]){
                temp += alphabet[u]
                
            }
            else if(x === angka){
                temp += ' '
                angka = -1;
            }
        }
        
    }
   return temp
  }
  
  function removeSpaces (str) {
    //code di sini
    var temp = ''
    for(var x = 0; x < str.length; x++){
        if(str[x] !== ' '){
            temp+= str[x]
        }
    }
    return temp
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var a =  changeVocals(name)
    var b = reverseWord(a)
    var c = setLowerUpperCase(b)
    return removeSpaces(c)

  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
