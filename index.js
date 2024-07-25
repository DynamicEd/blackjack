// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Solomon Cain",
    chips: 150,
    hasChips: true
}
if (player.chips <= 0) {
    player.hasChips === false
    console.log("Player has no chips")
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")
// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + " $: " + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if (player.hasChips === true && player.chips >= 25) {
        player.chips -= 25
        playerEl.textContent = player.name + " $: " + player.chips
        console.log("New Chips: " + player.chips)
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()   
    } else {
        messageEl.textContent = "New Game: 25 chips"
        console.log("isAliveNewGame: " + isAlive)
        console.log("hasBlackJackNewGame: " + hasBlackJack)
        console.log("ChipsNewGame: " + player.chips)
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 35
        playerEl.textContent = player.name + " $: " + player.chips
    } else {
        if (sum <= 21) {
            message = "Pick a New Card"
        }
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    console.log("isAlivePre: " + isAlive)
    console.log("hasBlackJackPre: " + hasBlackJack)
    console.log("ChipsPre: " + player.chips)
    if (isAlive === true && hasBlackJack === false && player.chips >= 10) {
        player.chips -= 10
        playerEl.textContent = player.name + " $: " + player.chips
        console.log("Chips: " + player.chips + " (-10)")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    } else {
        messageEl.textContent = "Start New Game"
    }
    console.log("isAlivePost: " + isAlive)
    console.log("hasBlackJackPost: " + hasBlackJack)
    console.log("ChipsPost: " + player.chips)
}
