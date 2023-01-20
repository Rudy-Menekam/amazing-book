class Library {
  constructor() {
    this.book = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = () => {
    const title = document.getElementById('insertTitle').value;
    const author = document.getElementById('insertAuthor').value;
    if (title.trim() === '' || author.trim() === '') return;
    const id = Date.now().toString();
    this.book.push({ title, author, id });

    localStorage.setItem('books', JSON.stringify(this.book));
    window.location.reload();
  };

  removeBook = (id) => {
    const filteredBooks = this.book.filter((b) => b.id !== id);
    localStorage.setItem('books', JSON.stringify(filteredBooks));
    window.location.reload();
  };
}
const bookContainer = document.querySelector('.bookContainer');
const g = new Library();
g.book.forEach((b) => {
  bookContainer.innerHTML += `
      <div class="innerContainer flex">
      <p>${b.title}</p> by
      <p>${b.author}</p>
        <button class="deleteBtn" id="${b.id}">Remove</button>
        <hr>
      </div>
    `;
});

bookContainer.addEventListener('click', (e) => {
  const clickedBtn = e.target.closest('.deleteBtn');
  if (!clickedBtn) return;
  const idToRemove = clickedBtn.id;
  g.removeBook(idToRemove);
});

document.querySelector('.addBtn').addEventListener('click', g.addBook);

// a complete website with navigation
const list = document.getElementById('list');
const addNew = document.getElementById('addNew');
const contact = document.getElementById('contact');
const listBook = document.querySelector('.bookContainer');
const addNewSect = document.querySelector('.innerContainer');
const contactSect = document.getElementById('.contact-section');

list.addEventListener('click', () => {
  addNewSect.classList.add('non-display');
  listBook.classList.remove('non-display');
  contactSect.classList.add('non-display');
  list.classList.add('active');
  addNew.classList.remove('active');
  contact.classList.remove('active');
});

addNew.addEventListener('click', () => {
  addNewSect.classList.remove('non-display');
  listBook.classList.add('non-display');
  contactSect.classList.add('non-display');
  list.classList.remove('active');
  addNew.classList.add('active');
  contact.classList.remove('active');
});

contact.addEventListener('click', () => {
  addNewSect.classList.add('non-display');
  listBook.classList.add('non-display');
  contactSect.classList.remove('non-display');
  list.classList.remove('active');
  contact.classList.add('active');
  addNew.classList.remove('active');
});
