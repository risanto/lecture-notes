let sensebounce = {
    name: 'Sensebounce+ SUMMER.RDY Shoes',
    manufacturer: 'Adidas',
    gender: 'Men',
    sport: 'Running',
    weightGram: 366
}

// === MENGAKSES VALUE ===

// Menggunakan .
console.log(sensebounce.name)

let toAccess = 'gender'
console.log(sensebounce.toAccess) // undefined
// Sama dengan sensebounce['toAccess']

// Menggunakan []
console.log(sensebounce['manufacturer'])

let toAccess = 'gender'
console.log(sensebounce[toAccess]) // Men
// Sama dengan sensebounce['gender']
  


// === MENAMBAHKAN KEY-VALUE BARU ===

let colours = ['Black', 'White']

sensebounce.colours = colours

let keyName = 'stocks'

sensebounce[keyName] = {
    'warehouse 1': 5,
    'warehouse 2': 3
}



/*
Cek apakah ada key dengan nama owner di variabel sensebounce

Cara non-optimal:

- Loop key yang ada di dalam object
    - Jika ada key dengan nama owner, maka true

Cara optimal:

- Ambil variabelnya dan akses key nya, kalo undefined berarti false
    >>> sensebounce['owner']
*/

if (sensebounce['owner'] === undefined) {
    console.log('tidak ada key dengan nama owner')
}



// === MENGHAPUS KEY ===

delete sensebounce['gender']



// === PASS BY REFERENCE ===

let shoes = sensebounce

let manufacturer = 'Nike'

shoes['manufacturer'] = manufacturer

console.log('ini shoes', shoes)
console.log('ini sensebounce', sensebounce)

// Karena yang diambil referensinya saja, maka jika isi variabel shoes berubah maka isi variabel sensebounce juga ikut berubah



// === TIPE DATA ===

let arrSensebounce = ['Adidas']

// Jika array
console.log(typeof arrSensebounce) // object
console.log(Array.isArray(arrSensebounce)) // true

// Jika object
console.log(typeof sensebounce) // object
console.log(Array.isArray(sensebounce)) // false



/**
 * Terdapat sebuah list pasien yang berisi nama serta gejala yang dialami.
 * Buatlah sebuah fungsi untuk mengelompokkan pasien-pasien berdasarkan gejalanya.
 * Hasil yang diharapkan dari pengelompokan tersebut adalah sebuah object.
 * Perhatikan test case yang diberikan.
 */

let patients = [
    ["Acong", "Mual"],
    ["Djoko", "Pusing"],
    ["Rama", "Pusing"],
    ["Sitorus", "Batuk"],
    ["Shinta", "Batuk"],
    ["Cthulhu", "Mual"],
    ["Nyarlothep", "Mual"],
];
  
function groupping(arr) {
/*
ALGORITMA

- Buat variabel output yang isinya objek kosong

- Loop i terhadap arr
    - Jika key belum ada
        - Masukkan arr[i][1] sebagai key di variabel output dengan isi array yang berisi arr[i][0]
    - Jika key sudah ada
        - Panggil output[arr[i][1]], dan push arr[i][0] ke dalamnya

*/

    let output = {}

    for (let i = 0; i < arr.length; i++) {
        if (output[arr[i][1]] === undefined) {
            output[arr[i][1]] = [arr[i][0]]

        } else {
            output[arr[i][1]].push(arr[i][0])
        }
    }

    return output
}

  
console.log(groupping(patients));
// {
//   Mual: [ 'Acong', 'Cthulhu', 'Nyarlothep' ],
//   Pusing: [ 'Djoko', 'Rama' ],
//   Batuk: [ 'Sitorus', 'Shinta' ]
// }

