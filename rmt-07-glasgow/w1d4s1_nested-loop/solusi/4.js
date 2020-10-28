/*

SOAL 1
BIKIN AKUARIUM

|~~~~~~~~~|
|         |
|         |
|         | 
|_ _ _ _ _| 

*/

var panjang = 11
var lebar = 5

/*
ALGORITMA

- Loop i dari 0 sampai lebar-1
    - Siapin variabel baris yang isinya string kosong

    - Loop j dari 0 sampai panjang-1
        - Jika j adalah 0 atau j adalah panjang-1, masukin | ke dalam baris
        - Selain itu jika i adalah 0 dan j bukan 0 dan j bukan index terakhir, masukin ~ ke baris
        - Selain itu jika j adalah angka ganjil dan i adalah lebar-1, masukin _ ke dalam baris
        - Selain itu jika j adalah angka genap, masukin ' ' ke dalam baris
*/

for (let i = 0; i < lebar; i++) {
    var baris = ''
    
    for (let j = 0; j < panjang; j++) {
        if (j === 0 || j === panjang-1) {
            baris += '|'
        } else if (i === 0 && j !== 0 && j !== panjang-1) {
            baris += '~'
        } else if (j % 2 === 1 && i === lebar-1) {
            baris += '_'
        } else {
            baris += ' '
        }
    }
    
    console.log(baris)
}




// SOAL 2 (BONUS)

// |~~~~~~~~~|
// | 🐟      |
// |  🐟     | 
// |   🐟    | 
// |_ _ _ _ _|

var panjang = 11
var lebar = 5