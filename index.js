// get filter element
const filter = document.querySelector('header input');
// get cards elements
const cards = document.querySelectorAll('.cards li')

const showAllCards = () => cards.forEach(showCard) 
const hideAllCards = () => cards.forEach(hideCard) 
const hideCard = (card) => card.style.display = "none"
const showCard = (card) => card.style.display = "block"

// filter function
const filterValues = () => {
  if(!filter.value || filter.value == '') {
    showAllCards()
    return
  }

  const filterTextLC = filter.value.toLowerCase()
  for(const card of cards){
    const titleLC = card.querySelector('h2').textContent.toLowerCase()

    if(titleLC.includes(filterTextLC)){
      showCard(card)
      continue;
    }
    hideCard(card)
    
  }

}

// add input event for the filter element
filter.addEventListener('input', filterValues)