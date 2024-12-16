function burgerMenu(selector) {
  const menu = document.querySelector(selector);
  const button = menu.querySelector('.burger-menu_button');
  const links = menu.querySelectorAll('.burger-menu_link');
  const overlay = menu.querySelector('.burger-menu_overlay');
  button.addEventListener('click', () => {
    toggleMenu();
  });
  links.forEach((link) => link.addEventListener('click', toggleMenu));
  overlay.addEventListener('click', toggleMenu);
  function toggleMenu() {
    menu.classList.toggle('burger-menu_active');
    document.body.style.overflow = menu.classList.contains('burger-menu_active') && 'hidden' || '';
  }
}
burgerMenu('.burger-menu');
function addComment() {
  const commentInput = document.getElementById('newComment');
  const commentList = document.getElementById('comments');
  const commentText = commentInput.value.trim();
  if (commentText) {
    const newComment = document.createElement('li');
    newComment.innerHTML = `
      <span class="comment-text">${commentText}</span>
      <div class="comment-actions">
        <button class="edit-comment">Редагувати</button>
        <button class="delete-comment">Видалити</button>
      </div>
    `;
    commentList.appendChild(newComment);
    newComment.querySelector('.edit-comment').addEventListener('click', () => editComment(newComment));
    newComment.querySelector('.delete-comment').addEventListener('click', () => deleteComment(newComment));
    commentInput.value = '';
  } else {
    alert('Коментар не може бути порожнім!');
  }
}
function editComment(commentItem) {
  const commentText = commentItem.querySelector('.comment-text');
  const newText = prompt('Редагувати коментар:', commentText.textContent);
  if (newText !== null) {
    commentText.textContent = newText.trim() || commentText.textContent;
  }
}
function deleteComment(commentItem) {
  commentItem.remove();
}
function toggleTheme() {
  const isLightTheme = document.body.classList.contains('light-theme');
  document.body.classList.toggle('light-theme', !isLightTheme);
  document.body.classList.toggle('dark-theme', isLightTheme);
}
const heartButton = document.querySelector('.heart');
  const likesNumber = heartButton.querySelector('.likes-number');
  heartButton.addEventListener('click', () => {
    let currentLikes = +(likesNumber.textContent);
    currentLikes++;
    likesNumber.textContent = currentLikes;
  });