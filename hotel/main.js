import { Hotel } from "./hotel.js";
document.getElementById("createHotel").addEventListener("click", CreateHotel);
document.getElementById("dar-baja").addEventListener("click", DarBajaHotel);
document.getElementById("show-hotel").addEventListener("click", showHotel);
document.getElementById("modif-hotel").addEventListener("click", modificarHotel);
// const hotel = [
// 	{ nombre: "Hotel A", num_habitaciones: 50, num_plantas: 5, area_total: 1000 },
// 	{ nombre: "Hotel B", num_habitaciones: 100, num_plantas: 10, area_total: 2000 },
// 	{ nombre: "Hotel C", num_habitaciones: 75, num_plantas: 8, area_total: 1500 }
//   ];
//hola
  const listhoteles = []; //la lista global  de hoteles, se usan cuando se crean los objetos al inicio de la aplicacion

  let hotel1 = new Hotel("Hotel A", 20, 5, 300);
  listhoteles.push(hotel1);
  
  // Crea otra instancia de la clase Hotel y agrega al array
  let hotel2 = new Hotel("Hotel B", 50, 8, 500);
  listhoteles.push(hotel2);
  
  // Y así sucesivamente
  let hotel3 = new Hotel("Hotel C", 30, 10, 700);
  listhoteles.push(hotel3);



function CreateHotel() {
	// crea los hoteles llamando al metodo crear objeto
	//debugger
	//const name = prompt("Ingrese Nombre", "nombre por defecto");
	//const num_room = prompt("Enter numero de habitaciones", "room por defecto");
	//const num_plantas = prompt("Enter numero de plantas","numero de plantas por defecto");
	//const area_total = prompt("Enter area_total", "area total por defecto");

	const listhoteles = []; //la lista global  de hoteles, se usan cuando se crean los objetos al inicio de la aplicacion

	let hotel1 = new Hotel("Hotel A", 20, 5, 300);
	listhoteles.push(hotel1);
	
	// Crea otra instancia de la clase Hotel y agrega al array
	let hotel2 = new Hotel("Hotel B", 50, 8, 500);
	listhoteles.push(hotel2);
	
	// Y así sucesivamente
	let hotel3 = new Hotel("Hotel C", 30, 10, 700);
	listhoteles.push(hotel3);

	console.log(listhoteles   )

	//const hotel = new Hotel(name, num_room, num_plantas, area_total); //usando el constructor crea un objeto con parametros
	//listhoteles.push(hotel);

	//formatToString()
}

function DarBajaHotel() {
	const nombre = prompt("ingrese el hotel al que desea dar de baja");
	const index = listhoteles.findIndex((hotel) => hotel.getName() === nombre);

	if (index !== -1) {
		console.log(`hotel ${nombre} eliminado`);
		listhoteles.splice(index, 1); //splice elimina un elemento del array donde index es la posicion y 1 es la cantidad de elementos que queremos eliminar

		formatToString();
	} else {
		console.log(`hotel ${nombre} no se encuentra en nuestra aplicacion`);
	}
}

function print_hotel(hotel) {
	const formatedHotels = `Nombre : ${hotel.getName()} <br> 
        Habitacions: ${hotel.getNum_room()}<br>
        plantas: ${hotel.getNum_plantas()}<br>
        area: ${hotel.getarea_total()}<br>`;
	document.getElementById("results").innerHTML = formatedHotels;
}

function showHotel() {
	debugger;

	const nombre = prompt("ingrese nombre de hotel");

	const foundHotel = listhoteles.find((hotel) => hotel.getName() === nombre);

	if (foundHotel) {
		console.log(`hotel ${nombre} encontrado`);
		console.log(`
		Nombre : ${foundHotel.getName()}  
        Habitacions: ${foundHotel.getNum_room()}
        plantas: ${foundHotel.getNum_plantas()}
        area: ${foundHotel.getarea_total()}
        `);
		print_hotel(foundHotel);
	} else {
		console.log(`hotel ${nombre} NO encontrado`);
	}
}
function modificarHotel() {
	debugger
	const nombre = prompt("ingrese el hotel que desea modificar");
	const foundHotel = listhoteles.find((hotel) => hotel.getName() === nombre);

	if (foundHotel) {
		const opcion = Number(prompt("¿Qué quieres modificar?\n 1. Número de habitaciones\n2. Número de plantas\n 3. Área total"));
		if (!isNaN(opcion)) {
			if (opcion === 1) {
				new_room = prompt("ingrese nuevo numero de habitaciones");
				foundHotel.setNum_room(new_room);
			} else if (opcion === 2) {
				new_floor = prompt("ingrese nuevo numero de plantas");
				foundHotel.setNum_plantas(new_floor);
			} else if (opcion === 3) {
				new_area = prompt("ingrese nuevo numero de area");
				foundHotel.setarea_total(new_area);
			}
			document.getElementById("results").innerHTML = `el hotel ${nombre} ha sido modificado con los siguientes valores`;
			print_hotel(foundHotel)
		}
	}
}
	function formatToString() {
		const formatedHotels = listhoteles.map((pc) => {
			return ` 🏨- 
		Nombre : ${pc.getName()} <br> 
        Habitacions: ${pc.getNum_room()}<br>
        plantas: ${pc.getNum_plantas()}<br>
        area: ${pc.getarea_total()}<br>
        `;
		});
		document.getElementById("results").innerHTML =
			formatedHotels.join("<br><br>");
	}
