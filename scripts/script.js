const cardsArray = [
  {
    name: "instagram",
    icon: '<i class="fab fa-instagram"></i>',
  },
  {
    name: "whatsapp",
    icon: '<i class="fab fa-whatsapp"></i>',
  },
  {
    name: "twitter",
    icon: '<i class="fab fa-twitter"></i>',
  },
  {
    name: "linkedin",
    icon: '<i class="fab fa-linkedin"></i>',
  },
  {
    name: "youtube",
    icon: '<i class="fab fa-youtube"></i>',
  },
  {
    name: "facebook",
    icon: '<i class="fab fa-facebook"></i>',
  },
  {
    name: "instagram",
    icon: '<i class="fab fa-instagram"></i>',
  },
  {
    name: "whatsapp",
    icon: '<i class="fab fa-whatsapp"></i>',
  },
  {
    name: "twitter",
    icon: '<i class="fab fa-twitter"></i>',
  },
  {
    name: "linkedin",
    icon: '<i class="fab fa-linkedin"></i>',
  },
  {
    name: "youtube",
    icon: '<i class="fab fa-youtube"></i>',
  },
  {
    name: "facebook",
    icon: '<i class="fab fa-facebook"></i>',
  },
];

let flippedCards = [];
let matchedPairs = 0;
shuffleCards();
const gameBoard = document.getElementById("gameBoard");
displayCards();

//Shuffle the cards
function shuffleCards() {
  for (let i = cardsArray.length - 1; i >= 0; i--) {
    const randIndex = Math.floor(Math.random() * (i + 1));
    [cardsArray[i], cardsArray[randIndex]] = [
      cardsArray[randIndex],
      cardsArray[i],
    ];
  }
}

//display the card

function displayCards() {
  cardsArray.forEach((curr, index, arr) => {
    const card = document.createElement("div");
    card.setAttribute("id", index);
    card.classList.add("cardback");
    card.classList.add("active");
    gameBoard.append(card);
    card.addEventListener("click", flipCard);
  });
}

function flipCard() {
  if (flippedCards.length < 2 && this.classList.contains("active")) {
    let cardId = this.getAttribute("id");
    flippedCards.push(this);
    this.classList.remove("cardback");
    this.innerHTML = cardsArray[cardId].icon;
    if (flippedCards.length == 2) {
      setTimeout(checkMatch, 1000);
    }
  }
}
// check the card matching
function checkMatch() {
  const card1Id = flippedCards[0].getAttribute("id");
  const card2Id = flippedCards[1].getAttribute("id");
  if (cardsArray[card1Id].name === cardsArray[card2Id].name) {
    matchedPairs++;
    checkGameOver();
  } else {
    flippedCards[0].innerHTML = "";
    flippedCards[0].classList.add("cardback");
    flippedCards[1].innerHTML = "";
    flippedCards[1].classList.add("cardback");
  }
  flippedCards = [];
}

function checkGameOver() {
  if (matchedPairs == cardsArray.length / 2) {
    while (gameBoard.firstChild) {}

    gameBoard.classList.remove("game");
  }
}
