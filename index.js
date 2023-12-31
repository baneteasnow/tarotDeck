"use strict"
const btnEl = document.querySelector(".btn")
const cardNameEl = document.querySelector(".card-name")
const cardDescriptionEl = document.querySelector(".card-description")
const imgEl = document.querySelector(".img")
const apiURL = "https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=1"

const getCard = async function () {
	try {
		console.log("clicked")
		btnEl.innerText = "Loading..."
		const response = await fetch(apiURL)
		const data = await response.json()
		console.log(data.cards[0].name_short)

		cardNameEl.innerText = data.cards[0].name
		cardDescriptionEl.innerText = data.cards[0].desc
		imgEl.src = `./img/${data.cards[0].name_short}.jpg`
		btnEl.innerText = "Get a card"
	} catch (error) {
		console.log(error.message)
		cardNameEl.innerText = ""
		cardDescriptionEl.innerText = "An error occurred. Please try again..."
	}
}

btnEl.addEventListener("click", getCard)
