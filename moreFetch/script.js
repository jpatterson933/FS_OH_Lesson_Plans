var resultsContainerEle = document.getElementById("results-container");
var url = 'https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact';
/*
    base url = https://alpha-vantage.p.rapidapi.com/query
    options
    ?interval=5min // stock price intervals
    &function=TIME_SERIES_INTRADAY // time series for intraday 
    &symbol=MSFT // stock to look up
    &datatype=json // datatype to return
    &output_size=compact // data size to return
*/


// set up our options for the fetch request 
// GET is our method
// headers includes the api key as well as the api host which in this case is rapid api
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ae9d6acaemshb175628a0959ccfp18deb7jsn8c86242e0312',
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	}
};

// grab loading element from html
var loading = document.getElementById("loader");


// set show loading element to null
var showLoadSymb = null;

// Our loading symbol function
// status will be the showLoadSymb and the element is going to be the loading element we want to show on the page
var dataLoading = function(status, element) {
    // if showLoadSymb = true
    if (status === true) {
        element.style.display = "block";
    // if showLoadSumb = false
    } else if (status === false) {
        element.style.display = "none";
    }
}

// create a fetch function to give ourselves control over when our data is going to be fetch
// this is important becasue sometimes we don't want our data to be fetched when we are debugging or working on some other part of the code
// helps preserve and keep your api request limit down
var fetchFunction = function() {
    fetch(url, options)
        .then(function(response) {
            showLoadSymb = true;
            dataLoading(showLoadSymb, loading)
            console.log(response)
            return response.json();
        })
        .then(function(data) {
            showLoadSymb = false;
            dataLoading(showLoadSymb, loading)
            console.log(data)
            console.log(data["Time Series (5min)"])
            var baseData = data["Time Series (5min)"]
            // console.log(baseData[0])

            Object.entries(baseData).forEach(ticker => {
                console.log(ticker)

                // create html elements
                var cardContainer = document.createElement("div");
                var cardHeader = document.createElement("h1");
                var dailyInfoContainer = document.createElement("div");
                // give html elements attributes
                cardContainer.setAttribute("class", "cards")
                dailyInfoContainer.setAttribute("class", "daily-info")
                cardContainer.append(cardHeader)
                
                Object.entries(ticker[1]).forEach(function(data){
                    var dailyInfoTitle = document.createElement("p");
                    dailyInfoTitle.innerText = data[0];

                    dailyInfoTitle.append(": ", Math.round(data[1]))


                    dailyInfoContainer.append(dailyInfoTitle)
                    
                    cardContainer.append(dailyInfoContainer)
                })


                cardHeader.append(ticker[0])



                resultsContainerEle.append(cardContainer)
                
                
            });


        })
}


// fetchFunction();
