let depthSpacing = -1000,
	previousScrollPosition = depthSpacing / 5,
	$frames = document.getElementsByClassName('frame'),
	frames = Array.from($frames),
	zIndices = []

window.onscroll = function () {
	let top = document.documentElement.scrollTop,
		delta = previousScrollPosition - top

	previousScrollPosition = top

	frames.forEach(function (n, i) {
		zIndices.push((i * depthSpacing) + depthSpacing)
		zIndices[i] += delta * -5
		let frame = frames[i],
			transform = `translateZ(${zIndices[i]}px)`,
			opacity = zIndices[i] < Math.abs(depthSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

let soundButton = document.querySelector('.soundbutton')
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function () {
	audio.pause()
}

window.onload = function () {
	document.querySelector('html').classList.add('--loaded')
	window.scrollTo(0, 1)
}