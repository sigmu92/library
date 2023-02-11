let myLibrary = [];

/**
 * Represents a book
 * @constructor
 * @param {string} title - title of the book
 * @param {string} author - author of the book
 * @param {BigInteger} pages - number of pages
 * @param {boolean} read - read or not
 */
function Book(title = 'Unknown', author = 'Unknown', pages = 0, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.isRead = function() {
  this.read = true;
};

Book.prototype.info = function() {
  if (this.read) {
    return (`${this.title} by ${this.author}, ${this.pages} pages, read`);
  } else {
    return (`${this.title} by ${this.author}, ${this.pages} pages, not yet read`);
  }
}

const test = new Book();
console.log(test);
test.isRead();
console.log(test);
console.log(test.info())

function addBookToLibrary() {

}



const newCard = document.createElement("div");
newCard.classList.add('book-card')
const newTitle = document.createElement('div');
newTitle.classList.add('title')
newTitle.textContent = "Unknown"
const newAuthor = document.createElement('div');
newAuthor.classList.add('author')
newAuthor.textContent = "Unknown"
const newPages = document.createElement('div');
newPages.classList.add('pages')
newPages.textContent = "Unknown"
const newRead = document.createElement('div');
newRead.classList.add('read')
newRead.textContent = "Not Read"
const newButtons = document.createElement('div')
newButtons.classList.add('buttons')
const remove = document.createElement('button');
remove.classList.add('card-button', 'remove')
remove.textContent = "Remove Book"
const change = document.createElement('button');
change.classList.add('card-button', 'change-read')
change.textContent = "Change Read"

newButtons.appendChild(remove)
newButtons.appendChild(change)

newCard.appendChild(newTitle)
newCard.appendChild(newAuthor)
newCard.appendChild(newPages)
newCard.appendChild(newRead)
newCard.appendChild(newButtons)


const mainPage = document.getElementsByClassName("main")[0]
mainPage.appendChild(newCard)
