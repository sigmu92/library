let myLibrary = [];

/**
 * Represents a book
 * @constructor
 * @param {string} title - title of the book
 * @param {string} author - author of the book
 * @param {string} pages - number of pages
 * @param {boolean} read - read or not
 * @param {BigInteger} id - id of the book
 */

class Book {

  constructor(title = 'Unknown', author = 'Unknown', pages = '0', read = false, id = myLibrary.length) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }

  isRead() {
    this.read = true;
  }

  info() {
    if (this.read) {
      return (`${this.title} by ${this.author}, ${this.pages} pages, read`);
    } else {
      return (`${this.title} by ${this.author}, ${this.pages} pages, not yet read`);
    }
  }
}

const popForm = document.getElementById("popup");
const submitBut = document.getElementById('submit');
const closeBut = document.getElementById('close');
const inputField = document.getElementById('new-book');
const mainPage = document.getElementsByClassName("main")[0]


closeBut.addEventListener('click', closeForm)
submitBut.addEventListener('click', addBookToLibrary)



function removeBook(e) {
  myLibrary.splice(e.target.id,1)
  for (let i = 0; i<myLibrary.length; i++) {
    myLibrary[i]['id'] = i
  }
  updateCards()
}

function changeStatus(e) {
  if (myLibrary[e.target.id]['read'] == false) {
    myLibrary[e.target.id]['read'] = true;
  } else {
    myLibrary[e.target.id]['read'] = false;
  }
  updateCards()
}

function addBookToLibrary() {
  event.preventDefault
  const newTitle = inputField[0]['value']
  const newAuthor = inputField[1]['value']
  const newPages = inputField[2]['value']
  let readStatus = false;
  if (inputField[3]['checked']) {
    readStatus = true;
  }
  myLibrary.push(new Book(newTitle,newAuthor,newPages,readStatus))
  closeForm()
  updateCards()
}

function showForm(){
  popForm.style.display='block'
}

function closeForm(){
  popForm.style.display="none"
  inputField[0]['value'] = "";
  inputField[1]['value'] = "";
  inputField[2]['value'] = "";
  inputField[3]['checked'] = false;
  inputField[4]['checked'] = true;
}

function updateCards() {
  while (mainPage.firstChild) {
    mainPage.removeChild(mainPage.lastChild)
  }
  myLibrary.forEach(book => createCard(book))
}

const addBook = document.getElementById('add');
addBook.addEventListener("click", showForm)

function createCard(book) {
  const newCard = document.createElement("div");
  newCard.classList.add('book-card')
  newCard.id = book.id;
  const newTitle = document.createElement('div');
  newTitle.classList.add('title')
  newTitle.textContent = book.title;
  const newAuthor = document.createElement('div');
  newAuthor.classList.add('author')
  newAuthor.textContent = book.author
  const newPages = document.createElement('div');
  newPages.classList.add('pages')
  newPages.textContent = book.pages
  const newRead = document.createElement('div');
  newRead.classList.add('read')
  if (book.read) {
    newRead.textContent = "Read"
  } else {
    newRead.textContent = "Not Read"
  }  
  const newButtons = document.createElement('div')
  newButtons.classList.add('buttons')
  const remove = document.createElement('button');
  remove.classList.add('card-button', 'remove')
  remove.textContent = "Remove Book"
  remove.id = book.id;
  const change = document.createElement('button');
  change.classList.add('card-button', 'change')
  change.textContent = "Change Read"
  change.id = book.id;

  newButtons.appendChild(remove)
  newButtons.appendChild(change)

  newCard.appendChild(newTitle)
  newCard.appendChild(newAuthor)
  newCard.appendChild(newPages)
  newCard.appendChild(newRead)
  newCard.appendChild(newButtons)

  

  const mainPage = document.getElementsByClassName("main")[0]
  mainPage.appendChild(newCard)

  const removeBut = document.querySelectorAll('.remove')
  const changeBut = document.querySelectorAll('.change')
  removeBut.forEach(button => button.addEventListener('click', removeBook))
  changeBut.forEach(button => button.addEventListener('click', changeStatus))


}

