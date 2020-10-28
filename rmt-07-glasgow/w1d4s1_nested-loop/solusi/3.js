/**
 * Diberikan sebuah input kata dengan tipe string.
 * Urutkan huruf yang ada dalam kata tersebut, sesuai dengan urutan alphabet.
 * Sebagai contoh:
 *   - Input  : jihgfedcba
 *     Output : abcdefghij
 *   - Input  : javascript
 *     Output : aacijprstv
 */

/*
----
POLA
----

input = 'javascript'
alfabet = 'abcdefghijklmnopqrstuvwxyz'

alfabet    0 -> 'a'
           1 -> 'b'
           2 -> 'c'
input
   0 -> 'j'
   1 -> 'a'
   2 -> 'v'
   3 -> 'a'
   4 -> 's'
   5 -> 'c'
   ...
   length-1 -> 't'

output: 'aac...'

---------
ALGORITMA
---------

- Ada variabel input
- Buat variabel alfabet yang isinya urutan alfabet
- Buat variabel output yang isinya string kosong

- Loop i terhadap alfabet
   - Loop j terhadap input
       - Jika alfabet[i] sama dengan input[j], maka masukkan alfabet[i]/input[j] ke dalam output
*/

var input = 'javascript'
var alfabet = 'abcdefghijklmnopqrstuvwxyz'
var output = ''

for (let i = 0; i < alfabet.length; i++) {
    for (let j = 0; j < input.length; j++) {
        if (alfabet[i] === input[j]) {
            output += input[j]
        }
    }
}

console.log(output)
