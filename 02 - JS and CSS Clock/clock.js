const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
const msecHand = document.querySelector('.msec-hand')

function setDate(){
	const now = new Date()
	const secondsDeg = now.getSeconds() / 60 * 360 + 90
	const minutesDeg = now.getMinutes() / 60 * 360 + 90
	const hoursDeg = now.getHours() / 12 * 360 + 90
	

	secondHand.style.transform = `rotate(${secondsDeg}deg)`+'scaleX(1)'
	minHand.style.transform = `rotate(${minutesDeg}deg)`+'scaleX(0.8)'
	hourHand.style.transform = `rotate(${hoursDeg}deg)`+'scaleX(0.6)'
}

setInterval(setDate, 1000)

function setMsec(){
	const now = new Date()
	const msecDeg = now.getMilliseconds() / 60 * 360 + 90

	msecHand.style.transform = `rotate(${msecDeg}deg)`+'scale(0.5)'
}

setInterval(setMsec, 500)