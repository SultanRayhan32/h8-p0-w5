function KaliFaktor3 (angka){
    if(angka === 0){
        return 0
    }
    else if(angka % 3 === 0) {
        return angka + KaliFaktor3(angka - 1)
    }
    else {
        return KaliFaktor3(angka -1)
    }
}

console.log(KaliFaktor3(100))//
console.log(KaliFaktor3(30))