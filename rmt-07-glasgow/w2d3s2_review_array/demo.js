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
    ALGORITMA:

    - Loop i terhadap arr1
        - Jika arr1[i] tidak sama dengan arr2[i], maka return false
    */

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false // single-line if
    }

    return output // default return ketika tidak ada yang direturn dari lines sebelumnya
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

ALGORITMA:

- Buat variabel output yang isinya array kosong
- Buat variabel tampungan yang isinya string kosong

- Loop i terhadap array
    - Simpan array[i] ke dalam tampungan

    - Jika array[i] dibagi dua habis berarti genap
        - Masukkan tampungan + ' adalah angka genap' ke dalam output
    - Jika tidak berarti ganjil
        - Masukkan tampungan + ' adalah angka ganjil' ke dalam output
*/

function sebutDanTambahAngka(array) {
    let output = []
    let tampungan = ''

    for (let i = 0; i < array.length; i++) {
        tampungan += array[i]

        if (tampungan % 2 === 0) {
            output.push(tampungan + ' adalah angka genap')
        } else {
            output.push(tampungan + ' adalah angka ganjil')
        }
    }

    return output
}

// console.log(sebutDanTambahAngka([1, 2, 3, 4, 5]))
// console.log(sebutDanTambahAngka([70, 21, 33]))



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
