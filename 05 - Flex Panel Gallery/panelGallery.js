// idea is to take out translateY of .panel *:first-child and .panel *:last-child
// to make them appear in the screen
panels = document.querySelectorAll('.panel')

panels.forEach(panel =>	panel.addEventListener('click', Open))
panels.forEach(panel =>	panel.addEventListener('transitionend', Active))


function Open(){
	this.classList.toggle('open') // toggle adiciona e remove class
}

function Active(e){
	console.log(e.propertyName)
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active') // toggle add e remove class		
	}
}