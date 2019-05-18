function hapusSimbol(str) {
    // you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // var num = '0123456789';
    if(str.length === 0){
        return ''
    }
    else {
        var kondisi = false
        for(var x = 0; x < abjad.length;x++){
            if(str[0] === abjad[x]){
                kondisi = true
            }
        }
        if(kondisi === false){
            return  hapusSimbol(str.slice(1))
        }
        else {
            return str[0] + hapusSimbol(str.slice(1))
        }
    }
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100