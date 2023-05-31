var experienceObject = {
    languages: ["HTML", "CSS", "Javascript", "Web APIs"],
    projects: [2, 5, 12, 3],
    startYear: ["2012", "2013", "2014", "2023"]
};

var createCard = function (languageName, projectTotal, startYear, mainContain, index) {

    // var slideShowContainer = document.querySelector('#slideshow-container');

    // create card elements
    var cardContainer = document.createElement('div');
    var cardHeader = document.createElement('h1');
    var cardBody = document.createElement('p');

    // give card attributes

    cardContainer.setAttribute('class', 'show-card');
    cardContainer.setAttribute('id', index);

    cardContainer.setAttribute("style", "border-radius: 12px; padding: 2em; margin: 1em; box-shadow: 0px 0px 10px 4px black;")

    cardHeader.textContent = languageName;
    cardBody.textContent = " I have made " + projectTotal + " projects with this language since " + startYear;

    cardContainer.append(cardHeader);
    cardHeader.append(cardBody);

    mainContain.append(cardContainer);

}

// createCard();

// 

var showCards = function () {
    var slideShowContainer = document.querySelector('#slideshow-container');

    slideShowContainer.setAttribute("style", "display:flex;")


    for(var i = 0; i < experienceObject.languages.length; i++){
        var langName = experienceObject.languages[i];
        var projTot = experienceObject.projects[i];
        var yrStart = experienceObject.startYear[i];

        createCard(langName, projTot, yrStart, slideShowContainer, i);
    }
}

showCards();

// show a few values
// user input must match those values
// can do cards
// brain teaser - answer as many questions as possible - each color appears and you have to click the color brown, not the word brown but the actual color

var colorShow = function () {
    var colorArray = ["#F0A3C5", "#9C1F9F", "#2E8B57", "#FF4500", "#7CFC00", "#4682B4", "#EE82EE", "#D2691E", "#8A2BE2", "#DC143C", "#00CED1", "#FF8C00"];
    // start at - 1 so on first increment it will be 0
    colorArrayIndex = -1;

    var randomId = Math.floor(Math.random() * experienceObject.languages.length);

    var colorInterval = setInterval(function () {
        ++colorArrayIndex;
        randomId = Math.floor(Math.random() * experienceObject.languages.length);

        var randomCard = document.getElementById(randomId);

        randomCard.style.backgroundColor = colorArray[colorArrayIndex];

        if(colorArrayIndex >= colorArray.length){
            colorArrayIndex = 0;
        }
    }, 1000)
}

colorShow();