function createTitle(title) {
  return bookIdea = `The ${title}`
};


function buildMainCharacter(name, age, pronouns){
  var character = {
  name: name,
  age: age,
  pronouns: pronouns
}
return character
};


function saveReview(newReview, array){
  if (array.includes(newReview) === true){
    {}
  }
  else {
    array.push(newReview)
  }
};

function calculatePageCount(bookTitle) {
  return bookPageCount = (bookTitle.length * 20);
};
//
function writeBook(bookTitle, bookCharacter, genre) {
  var newBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return newBook;
};


var ghoulTitle = createTitle("Teenage Ghoul");
var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
var ghoulBook = writeBook(ghoulTitle, ghoulCharacter, "mystery");

console.log(ghoulBook.pageCount);
console.log(ghoulBook.pageCount*.75);


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
