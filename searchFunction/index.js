// Retrieve the necessary DOM elements
let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-button');
const searchForm = document.getElementById('search-form')
const resultsContEle = document.getElementById('results');



const titles = [
    'The Great Gatsby',
    'To Kill a Mockingbird',
    'Pride and Prejudice',
    'The Lord of the Rings',
    'Harry Potter and the Sorcerer\'s Stone',
    'The Catcher in the Rye',
    '1984',
    'Brave New World',
    'The Chronicles of Narnia',
    'The Hobbit',
    'The Da Vinci Code',
    'The Alchemist',
    'The Kite Runner',
    'The Hunger Games',
    'The Fault in Our Stars',
    'The Girl with the Dragon Tattoo',
    'A Game of Thrones',
    'The Adventures of Tom Sawyer',
    'Gone with the Wind',
    'The Picture of Dorian Gray',
    'The Grapes of Wrath',
    'A Tale of Two Cities',
    'The Scarlet Letter',
    'The Count of Monte Cristo',
    'The Great Expectations',
    'The Color Purple',
    'The Old Man and the Sea',
    'The Diary of a Young Girl',
    'The Sun Also Rises',
    'The Bell Jar',
    'The Shining',
    'The Hitchhiker\'s Guide to the Galaxy',
    'The Godfather',
    'The Handmaid\'s Tale',
    'The Adventures of Huckleberry Finn',
    'The Little Prince',
    'The Brothers Karamazov',
    'The Outsiders',
    'The Secret Garden',
    'The Divine Comedy',
    'The Invisible Man',
    'The Jungle Book',
    'The Odyssey',
    'The Chronicles of Narnia',
    'The Adventures of Sherlock Holmes',
    'The Joy Luck Club',
    'The Stranger',
    'The Sun and Her Flowers',
    'The Road',
    'The Book Thief',
    'The Color of Magic',
    'The Metamorphosis'
];


const findMatch = title => { 
    let searchText = searchInput.value.toLowerCase();
    let searchWords = searchText.split(" ")
    return title.toLowerCase().includes(searchWords)

};

let moviesArray = [];


const handleSearchButtonClick = (event) => {
    event.preventDefault()
    // console.log(titles.some(findMatch))

    // let test = titles.some(findMatch)
    // console.log(test)

    let searchText = searchInput.value.toLowerCase();
    let searchWords = searchText.split(" ")

    titles.forEach(title => {
        if(title.toLowerCase().includes(searchWords)){
            moviesArray.push(title)

        } else {
            console.log("no mtach this time around")
        }
    })

    localStorage.setItem("movies", moviesArray)

    console.log(moviesArray, "moves array here...")
 
}


// Placeholder onSearch function
const onSearch = (searchText) => {
    // Perform the search logic here
    console.log('Search text:', searchText);
}


// Event listener for search button click
searchForm.addEventListener('submit', handleSearchButtonClick);

// Event listener for Enter key press
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearchButtonClick();
    }
});
