/*
------------------------------------------------------------

let fruits = ['mangga', 'sirsak']

let newFruits = fruits

newFruits[1] = 'anggur'


1. Apa isi dari newFruits dan fruits?

newFruits: [ 'mangga', 'anggur' ]
fruits: [ 'mangga', 'anggur' ]


Kenapa keduanya ikut berubah? Karena di array ada yang namanya pass by reference

-> karena newFruits referensinya masih sama dengan fruits, ketika newFruits keganti fruits pun ikut keganti


Agar referensi ga ikut berubah:

a. cara manual: buat array baru dengan nama newFruits, loop fruits dan masukkan elemen-elemen di dalamnya ke newFruits

b. pakai slice atau spread operator

*/

/*
------------------------------------------------------------

let fruits = ['mangga', 'sirsak']

fruits[0][1] = 'o'
fruits[1] = 'pepaya'

2. Apa isi dari fruits? -> ['mangga', 'pepaya']

Kenapa bukan ['mongga', 'pepaya'] ? Karena:

- string immutable -> elemen di dalamnya tidak bisa direplace
- array mutable -> elemen di dalamnya bisa direplace

*/

/*
------------------------------------------------------------

3. Cek apakah konten kedua array yang diberikan sama secara nilai dan letak

[] === [] -> false karena biarpun sama-sama array kosong, keduanya memiliki referensi yang berbeda

*/

function cekSama(arr1, arr2) {
    /*
   ALGORITMA

   - Jika panjang arr1 & arr2 berbeda, return false

    - Loop i thd arr1
        - Jika arr1[i] tidak sama dengan arr2[i]
            - return false

    - return true sebagai default
   */

    if (arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true // default return ketika tidak ada yang direturn dari lines sebelumnya
}

// console.log(cekSama([], [])) // true
// console.log(cekSama([3, 4, 6], [3, 4, 6])) // true
// console.log(cekSama([2, 9], [2, 7, 9])) // false
// console.log(cekSama([5, 6, 8], [8, 6, 5])) // false
// console.log(cekSama([34, 6, ''], [3, 4, 6])) // false


/*
------------------------------------------------------------
SOAL 4

let array = [1, 2, 3, 4, 5]

OUTPUT:
[
    '1 adalah angka ganjil',
    '12 adalah angka genap',
    '123 adalah angka ganjil',
    '1234 adalah angka genap',
    '12345 adalah angka ganjil'
]

ALGORITMA

- Buat variabel output isinya array kosong

- Loop i thd array
    - Buat variabel tampung isinya string kosong

    - Loop j dengan batas j <= i
        - Simpan array[j] ke dalam tampung

    - Jika tampung yang diubah ke angka kalau habis dibagi 2
        - Masukkan 'tampung adalah angka genap' ke output
    - Selain itu
        - Masukkan 'tampung adalah angka ganjil' ke output
*/

let array = [1, 2, 3, 4, 5]
let output = []

for (let i = 0; i < array.length; i++) {
    let tampung = ''

    for (let j = 0; j <= i; j++) {
        tampung += array[j]
    }

    // unary operator +
    
    if (+tampung % 2 === 0) {
        output.push(tampung + ' adalah angka genap')
    } else {
        output.push(tampung + ' adalah angka ganjil')
    }
}

console.log(output)



/*
SOAL 5 (BONUS)

let array = [1, 2, 3, 4, 5]

OUTPUT:

[1, 3, 6, 10, 15]
*/


/*
SOAL 6 (BONUS)

let array = [1, 3, 6, 10, 15]

OUTPUT:

[22, 13]
*/


/*
SOAL 7 (BONUS)

OUTPUT:

let array = [1, 3, 6, 10, 15]

[19, 16]
*/