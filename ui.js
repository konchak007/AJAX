const createButton = document.querySelector('#button');
const error = document.querySelector('.error');

function renderUsers(way) {

       way.forEach(el => {

              const userContainer = document.querySelector('.users-container');
              const userCard = document.createElement('div');
              userCard.classList.add('user-card');
              userContainer.appendChild(userCard);

              userCard.innerHTML = `<input type="submit" value ="${el.name}" class="inputs"></input>
              <br>
              <input type="submit" value ="${el.age}"class="inputs"></input>
              <br>`;

              const userDelete = document.createElement('button');
              userDelete.classList.add('delete-button');
              userDelete.innerHTML = 'Delete';

              userCard.appendChild(userDelete);

              userDelete.addEventListener('click', () => {
                     deleteFromServer(el.id, userCard);

              })

       });
}

createButton.addEventListener('click',postUser);
function postUser() {
       const age = document.getElementById('#age').value;
       const name = document.getElementById('#name').value;
       if (name = !'' || null) {
              error.innerHTML = 'invalid name';
       } else if (100 < NaN(age) >= 0) {
              error.innerHTML = 'invalid name';
       }
       const userInfo = {
              name,
              age
       }
       postUser(userInfo);
}