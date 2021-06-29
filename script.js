const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    // console.log('i was clicked');
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        // console.log(hasFlippedCard, firstCard)
        console.log(firstCard.dataset.framework);
        console.log(secondcard.dataset.framework);
    }
    else {
        hasFlippedCard = false;
        secondCard = this;

        //do cards match ?

    }
    // console.log(this)
}

cards.forEach(card => card.addEventListener('click', flipCard));