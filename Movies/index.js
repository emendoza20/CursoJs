const films = [
	{
		title: 'Avatar',
		year: '2009',
		genre: ['Action', 'Adventure', 'Fantasy'],
		director: 'James Cameron',
		actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Stephen Lang'],
		plot:
			'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
		poster: 'https://i.etsystatic.com/27089413/r/il/58d4b8/2843327847/il_1140xN.2843327847_paoy.jpg',
		imdbRating: '7.9',
		type: 'movie'
	},
	{
		title: 'I Am Legend',
		year: '2007',
		genre: ['Drama', 'Horror', 'Sci-Fi'],
		director: 'Francis Lawrence',
		actors: ['Will Smith', 'Alice Braga', 'Charlie Tahan', 'Salli Richardson-Whitfield'],
		plot:
			'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
		poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/iamlegend.mp_480x.progressive.jpg?v=1610391791',
		imdbRating: '7.2',
		type: 'movie'
	},
	{
		title: '300',
		year: '2006',
		genre: ['Action', 'Drama', 'Fantasy'],
		director: 'Zack Snyder',
		actors: ['Gerard Butler', 'Lena Headey', 'Dominic West', 'David Wenham'],
		plot: 'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
		poster: 'https://img.fruugo.com/product/2/29/55522292_max.jpg',
		imdbRating: '7.7',
		type: 'movie'
	},
	{
		title: 'The Avengers',
		year: '2012',
		genre: ['Action', 'Sci-Fi', 'Thriller'],
		director: 'Joss Whedon',
		actors: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'],
		plot:
			"Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
		poster: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2b/The_Avengers_Poster.png/revision/latest/scale-to-width-down/1000?cb=20150610135853&path-prefix=es',
		imdbRating: '8.1',
		type: 'movie'
	},
	{
		title: 'The Wolf of Wall Street',
		year: '2013',
		genre: ['Biography', 'Comedy', 'Crime'],
		director: 'Martin Scorsese',
		actors: ['Leonardo DiCaprio', 'Jonah Hill', 'Margot Robbie', 'Matthew McConaughey'],
		plot:
			'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
		poster: 'https://m.media-amazon.com/images/I/91m2MB2lYFL._SL1500_.jpg',
		imdbRating: '8.2',
		type: 'movie'
	},
	{
		title: 'Interstellar',
		year: '2014',
		genre: ['Adventure', 'Drama', 'Sci-Fi'],
		director: 'Christopher Nolan',
		actors: ['Ellen Burstyn', 'Matthew McConaughey', 'Mackenzie Foy', 'John Lithgow'],
		plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		poster: 'https://i.pinimg.com/originals/32/26/e0/3226e0b233ce56e4cf655ab14310d067.jpg',
		imdbRating: '8.6',
		type: 'movie'
	},
	{
		title: 'Doctor Strange',
		year: '2016',
		genre: ['Action', 'Adventure', 'Fantasy'],
		director: 'Scott Derrickson',
		actors: ['Rachel McAdams', 'Benedict Cumberbatch', 'Mads Mikkelsen', 'Tilda Swinton'],
		plot:
			'After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.',
		poster: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/558ccc44580247.5817460fafa87.jpg',
		imdbRating: '5.6',
		type: 'movie'
	},
	{
		title: 'Rogue One: A Star Wars Story',
		year: '2016',
		genre: ['Action', 'Adventure', 'Sci-Fi'],
		director: 'Gareth Edwards',
		actors: ['Felicity Jones', 'Riz Ahmed', 'Mads Mikkelsen', 'Ben Mendelsohn'],
		plot:
			'The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.',
		poster:
			'https://i.ebayimg.com/images/g/hXYAAOSwsydhZO9h/s-l500.jpg',
		imdbRating: '4',
		type: 'movie'
	},
	{
		title: "Assassin's Creed",
		year: '2016',
		genre: ['Action', 'Adventure', 'Fantasy'],
		director: 'Justin Kurzel',
		actors: ['Michael Fassbender', 'Michael Kenneth Williams', 'Marion Cotillard', 'Jeremy Irons'],
		plot:
			'When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.',
		poster: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qSZMxLOAsEPF6tXGFD83n/b0914152c722de321e278683a844fd10/ac-brotherhood.jpg?imwidth=360',
		imdbRating: '6',
		type: 'movie'
	}
];

function showFilms(films) {
	//const sortedFilms = orderByRatingDescending(films); // Se ordenan las películas por rating

	const formatedFilms = films.map((film, i) => {
		return `🎥 ${i}.- <img src="${film.poster}" width="150"><br>
		${film.title} <br> 
            Year: ${film.year} <br> 
            Genre: ${film.genre} <br>
            Director: ${film.director} <br> 
            Actors: ${film.actors} <br> 
            ImdbRating: ${film.imdbRating} <br>`

	});

	document.getElementById('films').innerHTML = formatedFilms.join('<br><br>')
}

showFilms(films);

function searchFilmsByCriteria() {
	debugger

	const searchValue = document.getElementById('search-button').value;
	const filteredFilms = films.filter(film => {
		const searchValueLowercase = searchValue.toLowerCase();
		return (
			film.title.toLowerCase().includes(searchValueLowercase) ||
			film.genre.toLowerCase().includes(searchValueLowercase) ||
			film.director.toLowerCase().includes(searchValueLowercase) ||
			film.actors.toLowerCase().includes(searchValueLowercase)
		);
	});
	showFilms(filteredFilms);
}

function sortByRatingAsc() {
	films.sort((a, b) => a.imdbRating - b.imdbRating);
	showFilms(films);
}

/*function findByGenre(genre) {
	const filmsFiltrados = films.filter(film => film.genre === genre);
	showFilms(filmsFiltrados);
}*/
function findByGenre(genre) {
	let peliculasFiltradas = [];
	debugger;
	console.log(`Genero por parametro: ${genre}`);
	films.forEach((pelicula) => {
		console.log(`Generos array: ${pelicula.genre}`);
		//pelicula.filter(genre => genre === genre);
		if (pelicula.genre.includes(genre)) {
			peliculasFiltradas.push(pelicula);
		}

	});


	console.log(`Peliculas filtradas: ${peliculasFiltradas}`);

	// for (let i = 0; i < films.genre.length; i++) {
	//   //filteredFilms = films.filter(film => film.genre === genre);

	// }

	showFilms(peliculasFiltradas);
}

function sortByRatingDesc() {
	films.sort((a, b) => b.imdbRating - a.imdbRating);
	showFilms(films);
}