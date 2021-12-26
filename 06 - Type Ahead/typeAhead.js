const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions') // matches list

searchInput.addEventListener('change', displayMatches) // show matches on change of input (it's updated only when user clicks out of input field)
searchInput.addEventListener('keyup', displayMatches) // and also when user type something


// API
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const cities = [] // cities array

// the promise from api
fetch(endpoint) // take the link
	.then(blob => blob.json()) // it returns 'blob' stuff. Convert it into json
	.then(data => cities.push(...data)) // now takes the return of above line (json stuff) and put it into cities array, spreading the array (...data) because it's nested 
// theres now some stuff on cities array

// display matches on the screen, on searchInput
function displayMatches() { // e.g. 'new' is typed -> displayMatches('new')

	const matchArray = findMatches(this.value, cities) // e.g. findMatches('new', const cities). Go to function findMatches() and return the matches of typed characters
	// e.g. matchArray = findMatches('new', const cities) = ['New York', 'New Mexico', 'New Jersey', ...]

	// configure what will be shown on screen
	const html = matchArray.map(place => { // map() calls a function for each element in matchArray
		const regex = new RegExp(this.value, 'gi') // this.value = new -> regex = /new/gi
		// name of city, and highlights corresponding match by replacing /new/gi by new in yellow
		const cityName = place.city.replace(regex, `<span class = "highlight">${this.value}</span>`)
		const stateName = place.state.replace(regex, `<span class = "highlight">${this.value}</span>`)
		// returns city, state, population (with commas)
		// e.g. New York, New York, 8.405.837
		return `
			<li>
				<span class="name">${cityName}, ${stateName}</span>
				<span class="population">${numberWithCommas(place.population)}</span>
			</li>
		`
	}).join('') // map returns array. join('') translates it into string

	// show stuff on screen
	suggestions.innerHTML = html
}

// search for input matches on cities array. Invoked inside function displayMatches()
function findMatches(wordToMatch, cities){ // e.g. findMatches('new', cities)
	return cities.filter(place => { // add filter to cities array, passing an element of it as parameter to an arrow function
		const regex = new RegExp(wordToMatch, 'gi') //transforms 'new' into a RegExp* to use in match()
		return place.city.match(regex) || place.state.match(regex) // returns matches of word 'new' on city and state parameters. city and state are paremeters defined in the API

		// *RegExp = Regular Expression: sequence of characters that forms a search pattern
		// use this search pattern to describe what I'm looking for
		//
		// syntax -> /pattern/modifiers. 
		// Ex: /hello/i is a RegExp.
		//		hello is a pattern
		//		i is the case-insensitive modifier
		// modifiers -> i - case-insensitive matching 
		//				g - find all matches rather than stopping at first one
		//				m - multiline matching
	})
}

// formats number
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}