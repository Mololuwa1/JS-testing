document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name : 'fries',
            img: 'images/fries.png'
        },
        {
            name : 'fries',
            img: 'images/fries.png'
        },
        {
            name : 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name : 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name : 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name : 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name : 'icecream',
            img: 'images/ice-cream.png'
        },
        {
            name : 'icecream',
            img: 'images/ice-cream.png'
        },
        {
            name : 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name : 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name : 'pizza',
            img: 'images/pizza.png'
        },
        {
            name : 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardChosen = []
    var cardChosenId = []
    var cardWon = []

    //create your board 
     function createBoard(){
         for (let i = 0; i < cardArray.length; i++){
             var card = document.createElement('img')
             card.setAttribute('src', 'images/blank.png')
             card.setAttribute('data-id',i)
             card.addEventListener('click', flipcard)
            grid.appendChild(card)
         }
     }

     //check for matches 

     function checkFormatch(){
         var cards = document.querySelectorAll('img')
         const optionOneId = cardChosenId[0]
         const optionTwoId = cardChosenId[1]
         if (cardChosen[0] === cardChosen[1]){
             alert('you found a match')
             cards[optionOneId]. setAttribute('src', 'images/white.png')
             cards[optionTwoId]. setAttribute('src', 'images/white.png')
            cardWon.push(cardChosen)
         }
         else{
             cards[optionOneId].setAttribute('src', 'images/blank.png')
             cards[optionTwoId].setAttribute('src', 'images/blank.png')
             alert('Sorry try again')        
         }
         cardChosen = []
         cardChosenId = []
         resultDisplay.textContent = cardWon.length
         if (cardWon.length === cardArray.length/2){
             resultDisplay.textContent = 'Congratulations! You win!'
         }
     }


     //flip your card
     function flipcard(){
         var cardId = this.getAttribute('data-id')
         cardChosen.push(cardArray[cardId].name)
         cardChosenId.push(cardId)
         this.setAttribute('src', cardArray[cardId].img)
         if (cardChosen.length ===2)
         {
             setTimeout(checkFormatch, 500)
         }
     }


     createBoard()
     
})


