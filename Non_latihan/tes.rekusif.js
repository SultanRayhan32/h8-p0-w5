function tambahRekusif (angka){
    if(angka === 0){
        return 0
    }
    else{
        return angka + tambahRekusif(angka -1)
    }
}

console.log(tambahRekusif(5)) // ||||||
// 5 + tR(5 -1) ==> 5 + 4 + tR(4 -1) ==> 5 + 4 + 3 + tr(3 -1) 
//===> 5 + 4 + 3 + 2 + tr(2 -1) ===> 5 + 4 + 3 + 2 + 1 + tr(1 -1) ===> 5 + 4 + 3 + 2 + 1 + 0 break;
console.log(tambahRekusif(9)) 
