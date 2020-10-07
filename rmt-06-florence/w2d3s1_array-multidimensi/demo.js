let countries = [
    ['Japan', 'South Korea', 'Indonesia'],  // 0
    [
        'Canada',   // 0
        'Mexico',   // 1
        'Argentina' // 2
    ],      // 1
    ['Italy', 'Spain', 'Sweden', 'Croatia'], // 2,
    ['Mali', 'Morocco', 'Namibia'] // 3
]


// Dapatkan semua negara di benua Amerika

console.log(countries[1])


// Dapatkan Mexico

console.log(countries[1][1])


// Hitung ada berapa negara dengan huruf depan S

/*
Algoritma:

- buat variabel countS yang isinya 0

- loop i terhadap countries
    - loop j terhadap countries[i]
        - jika countries[i][j][0] adalah S 
            - tambahkan 1 ke countS

- tampilkan isi dari countS
*/

let countS = 0

for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < countries[i].length; j++) {
        if (countries[i][j][0] === 'S') {
            countS++
        }
    }
}

console.log(countS)


// Buat fungsi yang menghitung ada berapa negara dengan huruf depan tertentu

/*
Algoritma:

- buat function dengan parameter array dan huruf
    - buat variabel count yang isinya 0

    - loop i terhadap array
        - loop j terhadap array[i]
            - jika array[i][j][0] adalah huruf 
                - tambahkan 1 ke count

    - tampilkan isi dari count
*/

function countCountries(arrCountries, huruf) {
    let count = 0

    for (let i = 0; i < arrCountries.length; i++) {
        for (let j = 0; j < arrCountries[i].length; j++) {
            if (arrCountries[i][j][0] === huruf) {
                count++
            }
        }
    }

    return count
}

let countI = countCountries(countries, 'I')

console.log('Negara dengan huruf depan I ada', countI)


// Buat fungsi yang mengembalikan array semua negara dengan huruf depan tertentu

// I -> ['Indonesia', 'Italy']

/*
Algoritma:

- buat function dengan parameter arrayNegara dan huruf
    - buat variabel countries yang isinya array kosong

    - loop i terhadap arrayNegara
        - loop j terhadap arrayNegara[i]
            - jika arrayNegara[i][j][0] adalah huruf 
                - tambahkan countries dengan arrayNegara[i][j]

    - kembalikan isi dari countries

- panggil function dengan memasukan array multidimensi negara dan huruf yang dicari
*/

function findCountries(arrCountries, huruf) {
    let countries = []

    for (let i = 0; i < arrCountries.length; i++) {
        for (let j = 0; j < arrCountries[i].length; j++) {
            if (arrCountries[i][j][0] === huruf) {
                countries.push(arrCountries[i][j])
            }
        }
    }

    return countries
}

let countriesWithI = findCountries(countries, 'I')
let countriesWithC = findCountries(countries, 'C')

console.log(countriesWithC)


// Buat fungsi yang mengembalikan array multidimensi yang berisi semua negara dengan huruf depan tertentu per benua

/*
S:

[
    ['South Korea'],
    [],
    ['Spain', 'Sweden'],
    []
]
*/

/*
Algoritma:

- buat function dengan parameter arrayNegara dan huruf
    - buat variabel continents yang isinya array kosong

    - loop i terhadap arrayNegara
        - buat variabel countries yang isinya array kosong
        - loop j terhadap arrayNegara[i]
            - jika arrayNegara[i][j][0] adalah huruf 
                - tambahkan countries dengan arrayNegara[i][j]

    - kembalikan isi dari continents

- panggil function dengan memasukan array multidimensi negara dan huruf yang dicari
*/

function findCountriesByContinent(arrCountries, huruf) {
    let continents = []

    for (let i = 0; i < arrCountries.length; i++) {
        let countries = []

        for (let j = 0; j < arrCountries[i].length; j++) {
            if (arrCountries[i][j][0] === huruf) {
                countries.push(arrCountries[i][j])
            }
        }

        continents.push(countries)
    }

    return continents
}

let countriesWithS = findCountriesByContinent(countries, 'S')
let countriesWithM = findCountriesByContinent(countries, 'M')

console.log(countriesWithM)
