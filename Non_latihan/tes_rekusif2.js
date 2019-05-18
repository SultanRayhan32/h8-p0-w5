function GenapREkusif (angka){
    if(angka === 0){
        return 0
    }
    else if(angka % 2 !== 0){
        return 0
    }
    else {
        return angka + GenapREkusif(angka -2)
    }
}

console.log(GenapREkusif(10,[]))  //
console.log(GenapREkusif(18,[])) // 18 + 16 + 14 + 12 + 10 + 8 + 6 + 4 + 2
console.log(GenapREkusif(11,[]))
console.log(GenapREkusif(20,[]))
console.log(GenapREkusif(5,[])) 