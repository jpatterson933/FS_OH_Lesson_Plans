var showSword = $('#show-sword')
var swords = $('#sword-list li');


var onClickEvent = function() {
    // console.log(swords)
    // console.log(event)


}

// on click function

$('#cycle').on('click', onClickEvent)





function clickedCards() {
    var cards = document.querySelectorAll('.card')
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function (event) {
            // console.log(event)
            var element = event.target.parentElement // grabs our card body giving us access to the dataset
            element.dataset.clicked = true; // if something is clicked it will change the data-clicked to true
        })
    }
}
