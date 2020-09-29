/*
======
NUMBER
=======

- bisa melakukan operasi aritmetika (/ * + - %)
    >>> console.log(5 % 2) -> 1
*/

/*
======
STRING
======

- bisa ditambah (+), jika dilakukan operasi aritmetika lain terhadap string maka hasilnya NaN (Not a Number)
    >>> console.log('hello' - 'world') -> NaN

- punya length
    >>> console.log('halo'.length) -> 4

- punya index mulai dari 0
    >>> console.log('halo'[0]) -> 'h'

- apa bedanya '' sama "" ? tidak ada
*/

/*
=======
BOOLEAN
=======

- true atau false
*/

/*
====================
PENGECEKAN TIPE DATA
====================

- gunakan typeof
    >>> console.log(typeof 'halo') -> string
*/

/*
=========
VARIABLES
=========

STORE panjang WITH ANY NUMBER
STORE lebar WITH ANY NUMBER

STORE luas WITH panjang TIMES lebar

DISPLAY luas
*/

var panjang  // declaration
panjang = 100 // assignment
var lebar = 3 // declare + assign

var luas = panjang * lebar

luas = luas + 5 // re-assignment


// Jika tipe data apa pun ditambahin string maka hasilnya string
// Jika string ditambahin tipe data apa pun maka hasilnya string


/*
==========
COMPARISON
==========

=== mengecek apakah tipe data dan nilai sama
== mengecek apakah nilai sama

var num = 10

console.log(num === '10') -> false
console.log(num == '10') -> true

!==
!=

var num = 10

console.log(num !== '10') -> true
console.log(num != '10') -> false

*/

/*
============
CONDITIONALS
============

STORE temperature WITH ANY NUMBER VALUE
STORE money WITH ANY NUMBER VALUE

IF temperature MORE THAN 36 AND money MORE THAN EQUAL TO 1000000
    DISPLAY "You should do swab test"
ELSE IF temperature MORE THAN 36 AND money LESS THAN 1000000
    DISPLAY "You cannot do swab test"
ELSE
    DISPLAY "You're healthy"
END IF 

=================
LOGICAL OPERATORS
=================

&& AND -> semua kondisi harus true
|| OR -> jika salah satu kondisi harus true
*/

/*

var temperature = 36
var money = 900000

if (temperature > 36 || money >= 1000000) {
    console.log('You should do swab test')
} 
else if (temperature > 36 && money < 1000000) {
    console.log("You cannot do swab test")
} 
else {
    console.log("You're healthy")
}
*/


/*
============
TRUTHY-FALSY
============

var num = 10

if (num) { // jika isi dari variabel num adalah truthy
    console.log('masuk')
}

if (!num) { // jika isi dari variabel num adalah falsy
    console.log('ga masuk')
}
*/









