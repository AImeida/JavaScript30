const inputs = document.querySelectorAll('.controls input')

// capture movement of input controls
inputs.forEach(input => input.addEventListener('change', handleUpdate)) // change: The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)
// however, it doesn't change on click and grad. Only on release of click
// so add a listener to mousemove on those controls
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)) // change: The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)


function handleUpdate(){// data-x creates an object x of data. x can be any fancy name
	const suffix = this.dataset.sizing || ''

	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
	
}
