const btn = document.querySelector('.addBtn');
const bookContainer = document.querySelector('.bookContainer');
const books = JSON.parse(localStorage.getItem('books')) || [];
function onAddElement(e) {
  e.preventDefault();
  const title = document.getElementById('insertTitle').value;
  const author = document.getElementById('insertAuthor').value;
  bookContainer.innerHTML += `
        <section>   
        <p>${title}</p>
            <p>${author}</p>
            <button class="deleteBtn" >Remove</button>
            <hr>
            </section>
        `;
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  console.log(books);
}

function onDeleteRow(e) {
  if (!e.target.classList.contains('deleteBtn')) {
    return;
  }

  const btn = e.target;
  btn.closest('section').remove();
}

btn.addEventListener('click', onAddElement);
bookContainer.addEventListener('click', onDeleteRow);