/*constants*/

var gameOver = false;
var warPlayers = [[], []];
var deck = [];
var suits = ["diamonds", "hearts", "clubs", "spades",];
var ranks = ["r02", "r03", "r04", "r05", "r06", "r07", "r08", "r09", "r10", "J", "Q", "K", "A"];

var firstRun = true;
//event listeners for shuffled deck buttons and players hand
var warButton = document.getElementsByClassName('btn');
for (let i = 0; i < warButton.length; i++) {
    warButton[i].addEventListener('click', battle);
}
// var warButton = document.querySelector("#player1button #player2button").addEventListener("click", battle);
var wPlayer1 = document.getElementById("player1cards");
var wPlayer2 = document.getElementById("player2cards");
var gamer1 = document.querySelector(".player1 .player1score");
var gamer2 = document.querySelector(".player2 .player2score");
let gamer1score = document.querySelector(".player1score");
let gamer2score = document.querySelector(".player2score");
function fight() {
    if (firstRun) {
        firstRun = false;
        buildDeck();
    }

}
//functions for the 52 cards
function battle() {
    fight()

    if (!gameOver) {
        var card1 = warPlayers[0].shift();
        var card2 = warPlayers[1].shift();
        console.log(card1, card2)
        var cardContainer = [card1, card2];
        console.log("wP1:", wPlayer1)
        console.log("wP2:", wPlayer2)
        wPlayer1.innerHTML = flipCard(card1)
        wPlayer2.innerHTML = flipCard(card2)
        // wPlayer1.innerHTML = flipCard(card1)
        // wPlayer2.innerHTML = flipCard(card2)
        winningHand(card1, card2, cardContainer)
        gamer1score.innerHTML = `Score =  ${warPlayers[0].length}`;
        gamer2score.innerHTML = `Score =  ${warPlayers[1].length}`;

    }
    isGameOver()

    // console.log(warPlayers) 
}
function winningHand(card1, card2, cardContainer) {
    var card1Value, card2Value;
    if (card1.Rank.length == 1){
        card1Value = 11
        console.log(card1Value)
    } else {
        console.log(card1.Rank)
        var tmpVal = 0
        card1.Rank.split('').forEach((el,i) => {
            if(i > 0){
                console.log(el)
                tmpVal += el
            }
        })
        card1Value = parseInt(tmpVal)
        console.log(card1Value)
    }
    if (card2.Rank.length == 1){
        card2Value = 11
        console.log(card2Value)
    } else {
        console.log(card2.Rank)
        var tmpVal = 0
        card2.Rank.split('').forEach((el,i) => {
            if(i > 0){
                console.log(el)
                tmpVal += el
            }
        })
        card2Value = parseInt(tmpVal)
        console.log(card2Value)
    }
    if (card1Value > card2Value) {
        warPlayers[0].push(card1, card2);
        console.log(card1Value,"hehrhe")
        console.log(card2Value,"hehrhe")
        console.log("WINNER is card 1", card1)
    }
    else if (card1Value < card2Value) {
        warPlayers[1].push(card2, card1)
        console.log(card1Value,"hehrhe")
        console.log(card2Value,"hehrhe")
        console.log("WINNER is card 2", card2)
    } else  {
        console.log("AHHH TIE")
        alert("WAAAARRR!!!!!");  
    
    }
    console.log(warPlayers)
}

//rendering cards in dom
function flipCard(fc) {
    // var myCards = fc.ranks + "&" + fc.suits + ";";
    var newCard = `<div class = "card ${fc.Suit} ${fc.Rank}" id = "player1cards"></div>`
    console.log(newCard);
    return newCard;
}

function buildDeck() {
    deck = [];
    for (var i = 0; i < suits.length; i++) {
        for (var x = 0; x < ranks.length; x++) {
            var cards = {
                Rank: ranks[x],
                Suit: suits[i],

            }
            deck.push(cards);

        }
        // console.log(cards);
    }
    console.log(deck)
    shuffle(deck);
    splitCards(deck);

}
//shuffle deck
function shuffle(arr) {
    console.log(arr)
    for (var i = arr.length - 1; i > 0; i--) {
        var player1 = Math.floor(Math.random() * (i + 1));
        // player1.push(arr[""]);
        var temp = arr[i];
        arr[i] = arr[player1];
        arr[player1] = temp;

    }


}
//dealing player 1 and player 2 there own hand of cards
function splitCards(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            warPlayers[0].push(arr[i]);
        } else {
            warPlayers[1].push(arr[i]);
        }
    }
    console.log(warPlayers)
}

function isGameOver(){
    if(warPlayers[0].length < 22){
        alert("PLAYER 2 WINS")
    }
    if(warPlayers[1].length < 22){
        alert("PLAYER 1 WINS")
    }
}

        // while (i != deck.length){
        //     player1.push(deck[i+1]);
        //     player2.push(deck[(i+1)]);
        //     i+=2;
        // }
//         }
//     }
//     function renderDeck(){
//         document.getElementById("deck").innerHTML = "";
//         for(var i = 0; i < deck.length; i++){
//                 var card = document.createElement("div")
//             }
//     }

// // create player one vs comp then player 2 vs play1 GAME LOGIC








