var batch = 'rapid'

/*
===============
PROPERTI LENGTH
===============

batch.length ==> 5
*/


/*
============
AKSES INDEKS
============

batch[0] ==> 'r'

batch[batch.length-1] ==> 'd'
*/


/*
========================
BUILT IN FUNCTION: SLICE
========================

batch.slice(0, 3) ==> 'rap'
*/

/*

KONDISIONAL:
- Jika lapar, tampilkan 'makan ah'
- Jika haus, tampilkan 'minum ah'

ALGORITMA:
- Buat variabel lapar yang isinya boolean
- Buat variabel haus yang isinya boolean

- Jika lapar adalah true
    - Tampilkan 'makan ah'
- Jika haus adalah true
    - Tampilkan 'minum ah'


============
IF - ELSE IF 
============

-> Jika satu kondisi terpenuhi, maka dia ga bakal ngecek ke kondisi selanjutnya

var lapar = true
var haus = true

if(lapar === true) {
    console.log('makan ah')
} else if (haus === true) {
    console.log('minum ah')
}

OUTPUT: 
>> makan ah


=======
IF - IF
=======

-> Jika kita mau menjalankan beberapa kondisi sekaligus

var lapar = true
var haus = true

if(lapar === true) {
    console.log('makan ah')
} 

if (haus === true) {
    console.log('minum ah')
}

OUTPUT:
>> makan ah
>> minum ah
*/


/*
==========================
NESTED CONDITIONS - SOAL 1
==========================

Buatlah sebuah program untuk mengecheck apakah seorang user dapat membeli sebuah barang atau tidak. Setiap barang yang akan dibeli akan memiliki stock dan harga barang tersebut. Setiap user akan memiliki data uang yang dia miliki dan jumlah barang yang ingin dibeli.
Syarat syarat untuk membeli barang tersebut adalah:

1. Stock harus tersedia agar barang tersebut bisa dibeli. Jika stok tidak tersedia maka tampilkan ‘stok tidak tersedia’

2. Uang yang dimliki user harus cukup untuk membeli barang sejumlah yang dia inginkan. Jika uangnya cukup maka tampilkan ‘berhasil memberi barang’ dan ketika uangnya tidak cukup maka tampilkan ‘uang tidak cukup’.

MIND MAP
- Penampung stokBarang, jumlahUang

- Jika stok tersedia
    - Jika uang cukup
        -Tampilkan ‘berhasil memberi barang’
    - Jika uang tidak cukup
        - Tampilkan ‘uang tidak cukup’
- Jika stok tidak tersedia
    - Tampilkan ‘stok tidak tersedia’

ALGORITMA
- Buat penampung stokBarang yang isinya angka
- Buat penampung jumlahUang yang isinya angka 
- Buat penampung jumlahBeli yang isinya angka
- Buat penampung hargaBarang yang isinya angka
- Buat penampung totalHarga yang isinya hargaBarang kali jumlahBeli

- Jika stokBarang lebih dari atau sama dengan jumlahBeli
    - Jika jumlahUang lebih dari atau sama dengan totalHarga
        -Tampilkan ‘berhasil memberi barang’
    - Selain itu
        - Tampilkan ‘uang tidak cukup
- Selain itu
    - Tampilkan ‘stok tidak tersedia’

CODE
var stokBarang = 5
var jumlahUang = 20000
var jumlahBeli = 5
var hargaBarang = 3000
var totalHarga = hargaBarang * jumlahBeli

if (stokBarang >= jumlahBeli) {
    if (jumlahUang >= totalHarga) {
        console.log('Berhasil membeli barang')
    } else {
        console.log('Uang tidak cukup')
    }
} else {
    console.log('Stok tidak tersedia')
}
*/


/*
==========================
NESTED CONDITIONS - SOAL 2
==========================

Buatlah sebuah program untuk mensimulasikan pemesanan makanan pada aplikasi gofood. Beberapa syarat yang harus dipenuhi untuk memesan makanan pada sebuah restoran adalah:

1. Restoran hanya buka dari pukul 8 pagi hingga 6 sore
2. Restoran ini hanya menyediakan makanan Indonesia dan makanan Korea
3. Terdapat dua cara untuk melakukan pembayaran menggunakan cash ataupun gopay.
4. Jika menggunakan gopay maka harga makanan nya akan diberikan diskon sebanyak 10%

MIND MAP
- Variabel jamBuka, jamTutup, jenisMakanan, metodePembayaran, hargaMakanan

- Jika jamBuka antara 8 sampai 18
    - Jika jenisMakanan adalah Indonesia atau Korea
        - Jika metodePembayaran cash
            - Tampilkan 'Bisa beli makanan, harga makanan: hargaMakanan'
        - Jika metodePembayaran gopay
            - Tampilkan 'Beli beli makanan, harga makanan: hargaMakanan * 0.9'
        - Jika tidak
            - Tampilkan 
    - Jika selain itu
        - Tampilkan 'makanan tidak tersedia'
- Jika tidak
    - Tampilkan 'restoran tutup'

EXTRA CHALLENGE: Terjemahkan MIND MAP di atas ke program!
*/


/*
=============
MATH FUNCTION
=============

var num = 5.95

Math.floor(num) => 5
- ngebulatin ke bawah

Math.ceil(num) => 6
- ngebulatin ke atas

Math.round(num) => 6
- pembulatan terdekat


Math.random()
- ngehasilin angka random antara 0 sampai 0.99999999


Math.absolute() -> Explore kegunaannya!
*/


/*
===========
SWITCH-CASE 
===========

=> Dipakai ketika kondisinya banyak dan tidak ada pembanding

var lampuLaluLintas = 'merah'
var waktu = 'pagi'

switch(lampuLaluLintas) {
    case 'merah':
        console.log('berhenti')
        break
    case 'orange':
        console.log('siap-siap')
        break
    case 'hijau':
        console.log('jalan')
        break
    default:
        console.log('lampu rusak')
        break
}


=> Di antara A dan B mana yang jalan? Kenapa salah satunya jalan kenapa yang lain tidak?

var jam = 8

-----------------A----------------
if (jam < 9) {
    console.log('masih bisa tidur')
}
----------------------------------

-----------------B----------------
switch(jam) {
    case(jam < 9):
        console.log('masih bisa tidur')
}
----------------------------------

*/
