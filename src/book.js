// Create a function called createTitle that takes in a title and returns a modified title in a string.

function createTitle(title) {
  return bookIdea = `The ${title}`
};

//Create a function called buildMainCharacter that returns a character object with key-values from the paramaters name, age, and pronouns.

function buildMainCharacter(name, age, pronouns){
  var character = {
  name: name,
  age: age,
  pronouns: pronouns
}
return character
};

//Create a function called saveReview that takes the a review and array from a parameter and adds the new review to an array, so long as it is not a duplicate review.

function saveReview(newReview, array){
  if (array.includes(newReview) === false){
   return array.push(newReview)
  }
};

//Create a function called calculatePageCount that returns the number of letters in the title multiplied by 20.

function calculatePageCount(bookTitle) {
  return bookPageCount = (bookTitle.length * 20);
};

//Create a function called writeBook that returns a book object with key-values from the parameters bookTitle, bookCharacter and genre, as well as the pageCount from the calculatePageCount function.

function writeBook(bookTitle, bookCharacter, genre) {
  var newBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return newBook;
};

//Create function called editBook that returns the page count key value from the bookTitle parameter and multiplies it by 75%.

function editBook(bookTitle) {
return bookTitle.pageCount = bookTitle.pageCount*.75
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
