var formElement = $("#form");
var nameElement = $("#name");
var emailElement = $("#email");
var confirmEmailElement = $("#confirm-email");


var allUsers = [];

// console.log(formElement, nameElement, emailElement, confirmEmailElement)

function onFormSubmit(event) {

    event.preventDefault(); // prevent the page from reloading when the script is sent in
    console.log(nameElement.val());
    // simple if statments to compare if the emails that are entered are the same
    if (emailElement.val().toLowerCase() !== confirmEmailElement.val().toLowerCase()) {
        alert("your emails to not match!!");
        return;
    }

    // create a newUser object
    var newUser = {
        name: nameElement.val().toLowerCase(), // key: value pairs with the key being whatever we want and the value being user input
        email: emailElement.val().toLowerCase()
    }

    var users = JSON.parse(localStorage.getItem('users')); // grab users from local storage if they exist, else it will return null
    // console.log(users)
    // if statement for what to do with the users from local storage
    if (users === null) {
        // push newUser into empty users array
        allUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(allUsers)) // save the updated users array to local storage

        // if an array of users exists
    } else if (users.length > 0) {
        // setting the empty users array to the users that exist in local storage
        allUsers = users;
        allUsers.push(newUser) // then add the new users
        localStorage.setItem('users', JSON.stringify(allUsers)) // save allUsers to local storage and overwrite previous array
    }
}

// simple on submit for our onFormSubmit() function
formElement.on('submit', onFormSubmit);

var catUrl = "https://catfact.ninja/fact"
var boredUrl = "https://www.boredapi.com/api/activity";

// function for doing a fetch request
function displayCatFactPlease() {

    fetch(boredUrl)

        .then(res => res.json()) // res.json() 

        .then(data => {
            // Handle the retrieved data
            console.log(data);
            // append the fact to the textContent of an html element with an id of #display-cat-fact using jquery
            $("#display-cat-fact").text(data.fact);

        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.log('Error:', error);
        });

}

// call our onclick for our cat-fact-button
$("#cat-fact-button").on("click", displayCatFactPlease)

// set up a request url
var requestUrl = "https://catfact.ninja/fact";
// the same request as above except as an ajax request and only happens on page reload
$.ajax({
    url: requestUrl, // plug in our requestUrl
    method: 'GET' // specify which method to use
}).then(function (res) {
    console.log(res) // console.log for testing
    $("#display-cat-fact").text(res.fact); // append to the page

})



var newButton = $("#new-api");

console.log(newButton, "this is my new-api button");

var urlList = ["https://official-joke-api.appspot.com/random_joke", "https://catfact.ninja/fact", "https://www.boredapi.com/api/activity"]

var jokeArray = [];

function superCoolClick(event) {


    // console.log(event)

    var randomIndex = Math.floor(Math.random() * urlList.length);
    console.log(randomIndex)

    fetch(urlList[[0]])
        .then(response => response.json())
        .then(data => {

            var jokesExist = JSON.parse(localStorage.getItem("jokes"))

            console.log(jokesExist)

            if (jokesExist === null) {
                jokeArray.push(data);
                localStorage.setItem("jokes", JSON.stringify(jokeArray))
            } else if (jokesExist.length > 0) {
                jokeArray = jokesExist;

                jokeArray.push(data);
                localStorage.setItem("jokes", JSON.stringify(jokeArray))
            }
        })
        .catch(error => {
            console.error(error);
        })
}

newButton.on("click", superCoolClick); // newbutton click event

var displayJokeElement = $("#display-joke");

function letsLaugh() {


    // check if the jokes exist
    var jokesExist = JSON.parse(localStorage.getItem("jokes"))

    // if not jokes are in local storage null will return as the value
    if (jokesExist === null) {

        // tell the user no jokes exist
        setupElement.text("No jokes exist! There is nothing in local storage!!!!")
        // append our text
        displayJokeElement.append(setupElement)


    } else if (jokesExist.length > 0) {
        // if jokes exist, set our empty array to what is in local storage
        jokeArray = jokesExist;
        // display jokes
        for (var i = 0; i < jokeArray.length; i++) {
            // create some html elements with jquery
            var jokeContainer = $("<div>")
            var setupElement = $("<p>");
            var punchlineElement = $("<p>");

            // append html elements
            jokeContainer.append(setupElement);
            jokeContainer.append(punchlineElement);
            // display joke
            setupElement.text(jokeArray[i].setup);
            punchlineElement.text(jokeArray[i].punchline)
            displayJokeElement.append(jokeContainer)
        }
        console.log(jokeArray)

    }

}

letsLaugh();