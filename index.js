// get filter element
const filter = document.querySelector('header input');
// get cards elements
const cards = document.querySelectorAll('.cards li')

const showAllCards = () => cards.forEach(showCard) 
const hideAllCards = () => cards.forEach(hideCard) 
const hideCard = (card) => card.style.display = "none"
const showCard = (card) => card.style.display = "block"

const filterValues = () => {
  // show all elements if there's no filter
  if(filter.value == '') return showAllCards()

  const filterText = filter.value.toLowerCase()
  cards.forEach(card => filterElement(card, filterText))
}

function filterElement(card, filterText){
    const title = card.querySelector('h2').textContent.toLowerCase()
    title.includes(filterText) ? showCard(card) : hideCard(card)
}

filter.addEventListener('input', filterValues)