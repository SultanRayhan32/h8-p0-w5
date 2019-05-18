// // // var obj = {fdfdsf : 8 , sdffdsf : 9}
// // // var x = Object.keys(obj)
// // // console.log(x.length)


// // // Perpangkatan
// // function power(base, exponent) {
// //     if (exponent == 0)
// //       return 1;
// //     else
// //       //console.log(base + ' ' + exponent)
// //       return base *  power(base, exponent - 1); // 3 * power(3 , 2) =>  3 * power(3 ,1) => 3 * power(3,0)
// //       //      4    * power(4 , 2)
// //       //      4    *  4  1
// //       //       4 * 4 * 4 * 1
// //   }
// //   console.log(power(2, 3)); // 3 ** 3 = 27


// var str = 'abc'
// console.log(str.slice(6))

function vocalReducer(string) {

    if (string.length === 0){
        return ''
    }
    if (string[0] === 'a' || string[0] === 'i' || string[0] === 'u' || string[0] === 'e' || string[0] === 'o'){
        return vocalReducer(string.slice(1))
            //   a  <---    bcdefghij
            //   e  <---    fghij
            //   i  <---    j 
    } else {
        return string[0]+',' + vocalReducer(string.slice(1))
            //      b   +   cdefghij
            //      b   +   c   +   defghij
            //      b   +   c   +   d   +   ---   +
            //      b   +   c   +   d   +   ---   +     f   +   ghij
            //      b   +   c   +   d   +   ---   +     f   +   g   +   hij
            //      b   +   c   +   d   +   ---   +     f   +   g   +   h   +   ---   +  j  +
    }
}

console.log(vocalReducer('abcdefghij')); // 'bcdfghj'
//console.log(vocalReducer('phyt')); // 'phyt'
// console.log(vocalReducer('semoga berhasil')); // 'smg brhsl'
//console.log(vocalReducer('semangat')); // 'smngt'
