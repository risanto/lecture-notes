// REVIEW: ITERATION AND CONDITIONAL

/*
    3 elemen yang harus ada di dalam loop?

    1. inisialisasi -> variabel pemulai
    2. kondisi -> selama kondisi ini terpenuhi loop akan jalan
    3. penambahan/pengurangan -> agar loop yang berjalan bisa berhenti ketika kondisi sudah tidak terpenuhi
*/



/*
 * Diberikan sebuah input kalimat dengan tipe string.Buat sebuah program untuk mengubah kalimat tersebut ke dalam bentuk title case.
 * 
 * Contoh:
 *   Input: this is javascript
 *   Output: This Is Javascript
 */

/*
    STEP 1: Pahami soal dan cari pola

    0 -> t -> T -> huruf pertama dalam kalimat
    5 -> i -> I -> huruf setelah spasi
    8 -> j -> J -> huruf setelah spasi
*/

/*
    STEP 2: Buat algoritma

    - Siapin variabel output yang isinya versi uppercase dari input[0] 

    -  Loop i mulai dari 1 sampai sebelum panjang input
    - Jika elemen sebelum i adalah spasi, masukan versi uppercase dari input[i] ke dalam output
    - Selain itu masukkan input[i] ke dalam output
*/

//  STEP 3: Terjemahkan ke code

var input = 'this is javascript'
var output = input[0].toUpperCase()

for (var i = 1; i < input.length; i++) {
    if (input[i - 1] === ' ') {
        output += input[i].toUpperCase()
    } else {
        output += input[i]
    }
}

console.log(output)
