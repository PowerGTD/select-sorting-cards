function randomCard() {
    
    let cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let cardSuit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
    let cardNumberSelector = Math.floor(Math.random() * cardNumber.length);
    let cardSuitSelector = Math.floor(Math.random() * cardSuit.length);
    
    let cardColor = "black";
    if (cardSuitSelector >= 2) {
        cardColor = "red";
    }
    
    let randomChosenCard = {number: cardNumber[cardNumberSelector], suit: cardSuit[cardSuitSelector], color: cardColor};

    return randomChosenCard;
    
}

function renderCard(randomCardObject, divSelector) {

var randomCardObjectNew = randomCardObject.number;
    
    if (randomCardObject.number === 11) randomCardObjectNew = "J";
    if (randomCardObject.number === 12) randomCardObjectNew = "Q";
    if (randomCardObject.number === 13) randomCardObjectNew = "K";
    if (randomCardObject.number === 14) randomCardObjectNew = "A";

    let chosenCard = `<div class='card ${randomCardObject.color}'>
                        <div class='card-top'>${randomCardObject.suit}</div>
                        <div class='card-middle'>${randomCardObjectNew}</div>
                        <div class='card-bottom'>${randomCardObject.suit}</div>
                      </div>`;
                      
    divSelector.innerHTML += chosenCard;

}

document.getElementById("clickdraw").addEventListener("click", function() {
    document.querySelector(".FirstCards").innerHTML = "";
    document.querySelector(".NewCards").innerHTML = "";
    let sizeOfHand = document.querySelector("#handsize").value;
    window.handOfCards = [];
    for(let x=0; x<sizeOfHand; x++) {
        window.handOfCards.push(randomCard());
    }
    let limit = 0;
    window.handOfCards.forEach(function(item) {
        renderCard(item, document.querySelector(".FirstCards"));
    });
    console.log(window.handOfCards);
 });

function sortArr(arr) {
    
    let min = 0;
    let xyz = 0;
    while (min < arr.length-1){
        xyz++;
        for(let i = min+1; i < arr.length; i++) {
          if (arr[min].number > arr[i].number) {
            let aux = arr[min];
            arr[min] = arr[i];
            arr[i] = aux;
          }
        }
        mySelectSort(xyz, arr);
        min++;
    }
	return arr;
}

document.getElementById("clicksort").addEventListener("click", function() {
    document.querySelector(".NewCards").innerHTML = "";
    sortArr(window.handOfCards);
})

function mySelectSort(xyz, arr) {       
      var newRowVariable = document.createElement("DIV");
      newRowVariable.classList.add("row-container");
      var newRow = document.createElement("DIV");
      newRow.classList.add("row");
      newRowVariable.innerHTML = `<div class="rowLabel">${xyz}</div>`;
      arr.forEach(function(item) {
          renderCard(item, newRow);
      });
      newRowVariable.appendChild(newRow);
      document.querySelector(".NewCards").appendChild(newRowVariable);
}