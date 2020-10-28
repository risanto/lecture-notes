/**
 * Tampilkan angka 0 sampai 9 ke samping, sebanyak 5 kali.
 * Contoh:
 *   0123456789
 *   0123456789
 *   0123456789
 *   0123456789
 *   0123456789
 * 
 * Selesaikan dengan nested looping!
 */

/*
ALGORITMA

1. Loop ke samping

- Siapin variabel row yang isinya string kosong

- Loop i dari 0 sampai 9
    - Masukkan i ke dalam row


2. Loop ke bawah

- Loop j dari 0 sampai 4


3. Gabungkan kedua loop

- Bungkus row yang sudah jadi dengan loop ke bawah
*/

for (let j = 0; j < 5; j++) { // outer loop
    var row = ''

    for (let i = 0; i <= 9; i++) { // inner loop
        row += i
    }

    console.log(row)
}