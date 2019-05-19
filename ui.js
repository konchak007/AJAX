const createButton = document.querySelector('#button');
const error = document.querySelector('.error');
const userContainer = document.querySelector('.users-container');

createButton.addEventListener('click',saveUser);
function saveUser() {
       const age = document.querySelector('#age').value;
       const name = document.querySelector('#name').value;
       if (!name) {
              error.innerHTML = 'invalid name';
       } else if (100 < Number.parseInt(age) && Number.parseInt(age) >= 0) {
              error.innerHTML = 'invalid name';
       }
       const userInfo = {
              name,
              age
       }
       
       postUser(userInfo);
}
function renderUserCard(user) {
       const userCard = document.createElement('div');
       userCard.classList.add('user-card');
       userContainer.appendChild(userCard);

       userCard.innerHTML = `<input type="submit" value ="${user.name}" class="inputs"></input>
              <br>
              <input type="submit" value ="${user.age}"class="inputs"></input>
              <br>`;

       const userDelete = document.createElement('button');
       userDelete.classList.add('delete-button');
       userDelete.innerHTML = 'Delete';

       userCard.appendChild(userDelete);

       userDelete.addEventListener('click', () => {
              deleteFromServer(user.id, userCard);

       })
}
function renderUsers(way) {
       way.forEach(el => renderUserCard(el));
}
