const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    // console.log('i was clicked');
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        // console.log(hasFlippedCard, firstCard)
    }
    else {
        hasFlippedCard = false;
        secondCard = this;

        // //do cards match ?
        // console.log(firstCard.dataset.framework);
        // console.log(secondCard.dataset.framework);
        checkForMatch()
    }
    // console.log(this)
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        //its a match 
        disablecards();
    }

    // is not a match 
    // console.log('funtion is executed')
    else {
        unflipCards();

    }
}

function disablecards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1500);
}
cards.forEach(card => card.addEventListener('click', flipCard));