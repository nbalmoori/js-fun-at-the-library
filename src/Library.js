

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

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



function addBook(library, newBook) {
  if (newBook.genre === "fantasy") {
    library.shelves.fantasy.push(newBook)
  }
  else if (newBook.genre === "fiction") {
    library.shelves.fiction.push(newBook)
  }
  else library.shelves.nonFiction.push(newBook)
};


function unshelfFantasyBook(library, title) {
  var bookToUnshelfIndex = library.shelves.fantasy.findIndex(function(book, index){
    if(book.title == title)
    return true;
  });
  if (bookToUnshelfIndex === -1) {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
  else {
    library.shelves.fantasy.splice(bookToUnshelfIndex, 1)
    return `You have now checked out ${title} from the ${library.name}`}
};

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
