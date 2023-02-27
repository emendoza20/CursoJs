const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayCities = ['Barcelona', 'Paris', 'Roma', 'Londres', 'Berlin']

const grilloArray = [
    { name: 'Pepita', surname: 'Grillo', age: 95 },
    { name: 'Maria', surname: 'Martinez', age: 35 },
    { name: 'Pepito', surname: 'Grillo', age: 110 },
    { name: 'Pepito', surname: 'Sanchez', age: 45 }
]
function myFilter(arr, callback) {

    if (arr instanceof Array === false)
        throw Error('El primer parámetro no es un array')

    if (typeof callback !== 'function')
        throw Error('El segundo parámetro no es una función')

    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) {
            newArray.push(arr[i])
        }
    }

    return newArray
}

const result1 = myFilter(myArr, isBiggerThanFive)
console.log(result1)

const result2 = myFilter(myArr, isEvenNumber)
console.log(result2)

const result3 = myFilter(arrayCities, startsByB)
console.log(result3)

const result4 = myFilter(grilloArray, isGrilloFamily)
console.log(result4)

function isBiggerThanFive(n) {
    return n > 5
}

function isEvenNumber(n) {
    return n % 2 === 0
}

function startsByB(string) {
    return string.startsWith('B')
}

//  { name: 'Pepita', surname: 'Grillo', age: 95 },
function isGrilloFamily(object) {
    return object.surname === 'Grillo'
}








