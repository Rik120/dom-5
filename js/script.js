window.addEventListener("DOMContentLoaded", () => {

	const tabs = document.querySelectorAll(".tabheader__item"),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items')

	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.classList.add('hide')
			item.classList.remove('show', 'fade')
		})

		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade')
		tabsContent[i].classList.remove('hide')
		tabs[i].classList.add('tabheader__item_active')
	}

	hideTabContent()
	showTabContent()

	tabsParent.addEventListener('click', (event) => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent()
					showTabContent(i)
				}
			})
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			hideModal()
		}
	})

	function showModalByscroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight
		) {
			showModal()
			window.removeEventListener('scroll', showModalByscroll)
		}
	}

	window.addEventListener('scroll', showModalByscroll)
})



let days = document.querySelector('#days')

let hours = document.querySelector('#hours')

let minutes = document.querySelector('#minutes')

let seconds = document.querySelector('#seconds')


let timer = setInterval(() => {

	seconds.innerHTML--

	if (seconds.innerHTML == -1) {

		seconds.innerHTML = 59

		minutes.innerHTML--

		if (minutes.innerHTML == -1) {

			minutes.innerHTML = 59

			hours.innerHTML--

			console.log(hours.innerHTML);

			if (hours.innerHTML == -1) {

				hours.innerHTML = 23

				days.innerHTML--

				if (days.innerHTML == -1) {

					clearInterval(timer)

					days.innerHTML = 0

					hours.innerHTML = 0

					minutes.innerHTML = 0

					seconds.innerHTML = 0

				}
			}
		}
	}
}, 1000);

let modalTrigger = document.querySelectorAll('[data-modal]')

let modal = document.querySelector('.modal')

let modalCloseBtn = document.querySelector('[data-close]')

let anim = document.querySelector('.modal__dialog')

modalTrigger.forEach((btn) => {

	btn.onclick = () => {

		modal.classList.remove('hide')

		modal.classList.add('show')

		setTimeout(() => {

			anim.style.top = '50%'

			anim.style.transform = 'translate(-50% , -50%) scale(1)'

			anim.style.opacity = '1'

		}, 10);
	}
})

modalCloseBtn.onclick = () => {

	anim.style.transform = 'translate(-50% , -50%) scale(3)'

	anim.style.opacity = '0'

	anim.style.top = '0%'

	setTimeout(() => {

		anim.style.top = '500%'

		anim.style.transform = 'translate(-50% , -50%) scale(3)'

		modal.classList.remove('show')

		modal.classList.add('hide')

	}, 300);
}

let str = document.querySelector('#current')

let signs = document.querySelectorAll('#swap[data-sign]')

let count = 3

let fotos = {
	1: 'img/slider/olive-oil.jpg',
	2: 'img/slider/paprika.jpg',
	3: 'img/slider/pepper.jpg',
	4: 'img/slider/food-12.jpg',
}

let foto = document.querySelector('.foto')

signs.forEach((sign) => {

	sign.onclick = () => {

		let met = sign.getAttribute('data-sign')

		if (met === '+') {

			count++

			if (count === 5) {

				count = 1

				foto.setAttribute('src', `img/slider/olive-oil.jpg`)

			}

			else {

				foto.setAttribute('src', `${fotos[count]}`)

			}

			str.innerHTML = `0${count}`

		} else if (met === '-') {

			count--

			if (count === 0) {

				count = 4

				foto.setAttribute("src", `img/slider/food-12.jpg`)

			} else {

				foto.setAttribute("src", `${fotos[count]}`)

			}

			str.innerHTML = `0${count}`
		}
	}
})



