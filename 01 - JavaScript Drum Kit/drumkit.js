// listens to keydown event and adds a function to that event 'e'
window.addEventListener('keydown', playSound)

function playSound(e) {
	// console.log(e.keyCode) logs attribute keyCode of keydown event
	// audio[x] selects attribute x of audio tag
	const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`)
	// selects the .key class
	const key = document.querySelector(`.key[data-key = '${e.keyCode}']`)

	if (!audio) return; // stop function if another key is pressed

	audio.currentTime = 0 // be kind, rewind: if key is pressed again while audio still playing, it wont play again.
	audio.play() // plays associated audio

	// add .playing (animation) class to .key element
	key.classList.add('playing')
}

// now smoothly remove .playing class
const keys = document.querySelectorAll('.key') // selects all keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) // when transition of key ends, goes to removeTransition()

function removeTransition(e) {
	// skip if its not transform
	if (e.propertyName !== 'transform') return;
	// removes .playing class
	this.classList.remove('playing') // this = key, which is the constant gone throught function
}
