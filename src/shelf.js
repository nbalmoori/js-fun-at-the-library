
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};


//Create function called shelfBook that if the length of the parameter shelf array is less than 3, the book parameter is added to the beginning of the array.
function shelfBook(book, shelf) {
  if(shelf.length < 3) {
    shelf.unshift(book)
  }
};

//Create function called unshelfBook with paramters title and shelf
function unshelfBook(title, shelf) {
//Initialize a variable called bookToUnshelfIndex that uses a findIndex function to find the index value of an element that stores the title of a book in the array
  var bookToUnshelfIndex = shelf.findIndex(function(book, index){
    if(book.title == title)
    return true;
  });
  //Use the splice function to remove the title from the array based on the index number assigned to the bookToUnshelfIndex variable.
  return shelf.splice(bookToUnshelfIndex, 1)
};

//Create a function called listTitles with parameter shelf
function listTitles(shelf) {
//Initialize a variable called list that is an array
  var list = []
//Create a loop function that iterates through each item of the shelf array
  for (var i = 0; i < shelf.length; i++) {
//Add the title key value from each element in the shelf to the list array
    list.push(shelf[i].title)
  }
//Redefine the list variable from an array into a string by using the join function to concatenate each element of the list array into a single string.
  list = list.join(', ')
  return list
};

//Create a function called searchShelf with paramters shelf and title
function searchShelf(shelf, title) {
//Initialize a variable called onShelf that uses the .find function to locate if the title exists on the shelf array.
  var onShelf = shelf.find(function(book, index) {
    if(book.title == title)
    return true;
  });
//if the onShelf variable returns true, return true -- if not, return false.
  if(onShelf === undefined) {
    return false
  }
  else {
    return true
  }
};
