/*
=================================
Kesamaan antara array dan string:
=================================
- bisa diakses indeksnya pakai []
- punya length
- bisa diloop

==================================
Perbedaan antara array dan string:
==================================
- string immutable, array mutable (elemen di dalamnya bisa di-reassign)
    >>> let nameArray = ['R', 'i', 's', 'a', 'n']
    >>> nameArray[2] = 'z' --> ['R', 'i', 'z', 'a', 'n']

==================================
Array methods
==================================

let nameArray = ['R', 'i', 's', 'a', 'n']

- push: menambahkan elemen di ujung array
    >>> nameArray.push(100) ---> [ 'R', 'i', 's', 'a', 'n', 100 ]

- pop: menghapus elemen di ujung array
    >>> nameArray.pop() ---> [ 'R', 'i', 's', 'a' ]

- indexOf: mencari suatu elemen ada di indeks ke berapa
    >>> nameArray.indexOf('a') ---> 3
    >>> nameArray.indexOf('z') ---> -1

- shift: menghapus elemen di depan array
    >>> nameArray.shift() ---> [ 'i', 's', 'a', 'n' ]
*/



/* 
==================================
QUIZ 1 - CARI RATA-RATA NILAI
==================================

Algoritma:

- buat fungsi getAverage yang memiliki parameter scores dengan tipe data array
    - buat variabel total yang isinya 0
    - loop i terhadap scores
        - tambahkan scores[i] ke dalam total
    - kembalikan total dibagi panjang scores

- panggil function dengan memasukkan array nilai ke dalamnya, lalu tampilkan hasilnya
*/

function getAverage(scores) {
    console.log('di slot scores isinya:', scores) // pastikan isi dari parameter scores

    let total = 0

    for (let i = 0; i < scores.length; i++) {
        total += scores[i]
    }

    return total/scores.length
}

let a = [100, 30, 40, 80, 0]

// console.log(getAverage(a))

let scores2 = [10, 40]

// console.log(getAverage(scores2))



/*
=========================================
QUIZ 2 - KEMBALIKAN ARRAY GENAP & GANJIL
=========================================

Algoritma:

- buat fungsi genapGanjil yang menerima arrayOfNumber dengan tipe data array
    - siapkan variabel arrayGanjil yang berisi array kosong
    - siapkan variabel arrayGenap yang berisi array kosong

    - loop i terhadap nums
        - jika nums[i] % 2 adalah 1, berarti ganjil
            - push nums[i] ke arrayGanjil
        - selain itu berarti genap
            - push nums[i] ke arrayGenap

    - kembalikan isi dari arrayGenap dan arrayGanjil

- panggil fungsi dengan memasukkan array angka ke dalamnya, lalu tampilkan hasilnya
*/

function genapGanjil(arrayOfNumber) {
    let arrayGanjil = []
    let arrayGenap = []
    
    for(let i = 0; i < arrayOfNumber.length; i++) {
        if (arrayOfNumber[i] % 2 === 1) {
            arrayGanjil.push(arrayOfNumber[i])
        } else {
            arrayGenap.push(arrayOfNumber[i])
        }
    }
    
    return `arrayGenap: [${arrayGenap}], arrayGanjil: [${arrayGanjil}]`
}

let angka = [10, 1, 2, 19, 15, 30, 40, 50, 95, 10, 50, 75, 65, 63]

let hasil = genapGanjil(angka)

console.log(hasil)

