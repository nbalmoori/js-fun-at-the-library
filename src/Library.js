

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};


//Create function called createLibrary that returns a library object that has a key-value from the libraryName parameter and creates a key value called shelves which contains arrays for fantasy, fiction, and nonfiction genres.
function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: []
    }
  }
  return library
};


//Create function called addBook that takes in parameters library and newBook and shelves the book to the appropriate genre shelf based on the genre key of the book object.
function addBook(library, newBook) {
  if (newBook.genre === "fantasy") {
    library.shelves.fantasy.push(newBook)
  }
  else if (newBook.genre === "fiction") {
    library.shelves.fiction.push(newBook)
  }
  else library.shelves.nonFiction.push(newBook)
};

//Create a function called unshelfFantasyBook that takes in paramters library and title.
function unshelfFantasyBook(library, title) {
//Initialize a variable called bookToUnshelfIndex that uses the findIndex function to determine if a book exists in the fantasy shelf array of the library parameter.
  var bookToUnshelfIndex = library.shelves.fantasy.findIndex(function(book, index){
    if(book.title == title)
    return true;
  });
//If the bookToUnshelfIndex is equal to -1, meaning that the findIndex function could not locate the book in the fantasy shelf array, return a string that says no copies are available at the library.
  if (bookToUnshelfIndex === -1) {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
//If the bookToShelfIndex finds the index of the book that exists in the array, unshelf the book from the fantasy shelf array using the splice function and return a string saying the book has been checked out from the library.
  else {
    library.shelves.fantasy.splice(bookToUnshelfIndex, 1)
    return `You have now checked out ${title} from the ${library.name}`}
};

//Creates a function called unshelfFictionBook that performs the same task as unshelfFantasyBook, but for the fiction shelf array.
function unshelfFictionBook(library, title) {
  var bookToUnshelfIndex = library.shelves.fiction.findIndex(function(book, index){
    if(book.title == title)
    return true;
  });
  if (bookToUnshelfIndex === -1) {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
  else {
    library.shelves.fiction.splice(bookToUnshelfIndex, 1)
    return `You have now checked out ${title} from the ${library.name}`}
};

//Creates a function called unshelfFictionBook that performs the same task as unshelfFantasyBook, but for the non-fiction shelf array.
function unshelfNonFictionBook(library, title) {
  var bookToUnshelfIndex = library.shelves.nonFiction.findIndex(function(book, index){
    if(book.title == title)
      return true;
  });
  if (bookToUnshelfIndex === -1) {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
  else {
    library.shelves.nonFiction.splice(bookToUnshelfIndex, 1)
    return `You have now checked out ${title} from the ${library.name}`}
};

//Creates a function called checkoutBook that takes in the parameters library, title, and genre, and uses the unshelfFantasyBook, unshelfFictionBook and unshelfNonFictionBook functions to check out a book from the library.
function checkoutBook(library, title, genre) {
  if (genre === "fantasy") {
    return unshelfFantasyBook(library, title);
  }
  else if (genre === "fiction") {
    return unshelfFictionBook(library, title);
  }
  else return unshelfNonFictionBook(library, title);
};





// var denverLibrary = createLibrary("Denver Public Library");
//
// var dracula = {
//   title: "Dracula",
//   mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
//   pageCount: 418,
//   genre: "fantasy"
// }
// var bornACrime = {
//   title: "Born a Crime",
//   mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
//   pageCount: 304,
//   genre: "nonFiction"
// }
// var prideAndPrejudice = {
//   title: "Pride and Prejudice",
//   mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
//   pageCount: 432,
//   genre: "fiction"
// }
// var denverLibrary = createLibrary("Denver Public Library");
//
// addBook(denverLibrary, dracula);
// addBook(denverLibrary, bornACrime);
// addBook(denverLibrary, prideAndPrejudice);
//
// // console.log(denverLibrary.shelves);
// var result1 = checkoutBook(denverLibrary, "Born a Crime", "nonFiction");
// // var result1 = unshelfNonFictionBook(denverLibrary, "Born a Crime")
// console.log(result1)
//
// var error2 = checkoutBook(denverLibrary, "Yes Please", "nonFiction");
// console.log(error2);
//
// // checkoutBook(denverLibrary, "Yes Please", "nonFiction");
//
// // console.log(denverLibrary.shelves);
