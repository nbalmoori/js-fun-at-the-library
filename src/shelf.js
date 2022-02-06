
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

function shelfBook(book, shelf) {
  if(shelf.length >= 3) {
    {}
  }
  else {
  shelf.unshift(book)
}
};


function unshelfBook(title, shelf) {
  var bookToUnshelfIndex = shelf.findIndex(function(book, index){
    if(book.title == title)
    return true;
  });
  return shelf.splice(bookToUnshelfIndex, 1)
};


function listTitles(shelf) {
  var list = []
  for (var i = 0; i < shelf.length; i++) {
    list.push(shelf[i].title)
  }
  list = list.join(', ')
  return list
};


function searchShelf(shelf, title) {
  var onShelf = shelf.find(function(book, index) {
    if(book.title == title)
    return true;
  });
  if(onShelf === undefined) {
    return false
  }
  else {
    return true
  }
};
