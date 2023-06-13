// Blackjack Game

// Card variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = [
  "Ace",
  "King",
  "Queen",
  "Jack",
  "Ten",
  "Nine",
  "Eight",
  "Seven",
  "Six",
  "Five",
  "Four",
  "Three",
  "Two"
];

// DOM variables
let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

// Game variables
let gameStarted = false,
  gameOver = false,
  playerWon = false,
  dealerCards = [],
  playerCards = [],
  dealerScore = 0,
  playerScore = 0,
  deck = [];

// Helper function to create deck
function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

// Helper function to get card string
function getCardString(card) {
  return card.value + " of " + card.suit;
}

// Helper function to get card numeric value
function getCardNumericValue(card) {
  switch (card.value) {
    case "Ace":
      return 1;
    case "Two":
      return 2;
    case "Three":
      return 3;
    case "Four":
      return 4;
    case "Five":
      return 5;
    case "Six":
      return 6;
    case "Seven":
      return 7;
    case "Eight":
      return 8;
    case "Nine":
      return 9;
    default:
      return 10;
  }
}

// Helper function to get score
function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === "Ace") {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}

// Helper function to update text area
function updateTextArea() {
  let dealerCardString = "";
  for (let i = 0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + "\n";
  }

  let playerCardString = "";
  for (let i = 0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + "\n";
  }

  textArea.innerText =
    "Dealer has:\n" +
    dealerCardString +
    "(score: " +
    dealerScore +
    ")\n\n" +

    "Player has:\n" +
    playerCardString +
    "(score: " +
    playerScore +
    ")\n\n";

  if (gameOver) {
    if (playerWon) {
      textArea.innerText += "YOU WIN!";
    } else {
      textArea.innerText += "DEALER WINS";
    }
    newGameButton.style
  }
}