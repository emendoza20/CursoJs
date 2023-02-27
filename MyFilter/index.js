debugger
const myArr = [1, 2, 5, 6, 10];

const cadena = ['Barcelona', 'Paris', 'Roma', 'Londres', 'Berlin'];

const family = [
	{ name: 'Pepita', surname: 'Grillo', age: 95 },
	{ name: 'Maria', surname: 'Martinez', age: 35 },
	{ name: 'Pepito', surname: 'Grillo', age: 110 },
	{ name: 'Pepito', surname: 'Sanchez', age: 45 }
]

function MyFilter(arr, func) {
	if (!Array.isArray(myArr)) {
		throw new Error("El primer parámetro debería ser un array");
	}

	if (typeof func !== "function") throw Error("Esto no es funcion");

	const newArray = [];

	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i]) === true) {//llamo a la calback
			newArray.push(arr[i])
		}
	}

	return newArray;
}

// const result1 = MyFilter(myArr,isBiggerThanFive) 
// console.log(`Numeros mas grandes que 5 son ${result1}`) //  


// const result2 = MyFilter(myArr,isEvenNumber) 
// console.log(result2) // [2,4,6,8,10]


// const result3 = MyFilter(cadena, startsByB)
// console.log(result3) // [2,4,6,8,10]

const result4 = MyFilter(family, isGrilloFamily)
console.log(result4) // [2,4,6,8,10]
// function isBiggerThanFive(num)
// {
// 	return num>5
// }

// function isEvenNumber(num)
// {
// 	return(num%2===0)
// }

// function startsByB(cadena) {
// 	return cadena[0] === 'B'
// }

function isGrilloFamily(object) {

	return object.surname==='Grillo'




}