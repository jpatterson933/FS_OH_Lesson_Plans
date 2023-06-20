


function start(racers) {
    return new Promise((resolve, reject) => {

        let placement = [];

        let stillRacing = racers.length;

        for (let i = 0; i < racers.length; i++) {

            racers[i].then(result => {
                // we set the result from the Promise to a placement with an increasing index

                let index = Math.floor(Math.random() * racers.length);
                // randomize placement
                placement[index] = result;

                stillRacing--;

                if (stillRacing == 0) {
                    let finishers = [];

                    placement.map(driver => {

                        if (driver !== undefined) {

                            finishers.push(driver);
                        }
                    })


                    let finalResults = [];
                    let positions = ["first", "second", "third", "fourth", "fifth"];



                    for (let i = 0; i < finishers.length; i++) {
                        finalResults.push(`${finishers[i]} finished in ${positions[i]}`)
                    }

                    resolve(finalResults);
                }

            }).catch(result => {
                console.log(`Break news! ${result} the match!`);

                stillRacing--;

                if (stillRacing == 0) reject(result);
            });


        };

    });
};


function getRacer(name) {
    if(Math.random() <= 0.30){
        return Promise.reject(name + " forfeits")
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(name), Math.random() * 1000)
    })
}

function race(racers) {
    console.log('starting race...');

    start(racers).then(results => { console.log("results: " + results)})
}

race([getRacer("James"), getRacer("Matthew"), getRacer("Brian"), getRacer("Jeff"), getRacer("Sofia")])



