const url = 'https://test-users-api.herokuapp.com/users';

function get() {
       axios.get(url)
       .then(function(response) {
            const way = response.data.data;
            way.forEach(id => {                 
                   renderUser(id.name , id.age)
            }); 
       })
       .catch(function (error) {   
              console.log(error);
       });  
}
get();

function renderUser(name,age) {
       const userContainer = document.querySelector('.users-container');
       const userCard = document.createElement('div');
       userCard.classList.add('user-card');
       userContainer.appendChild(userCard);
       
       userCard.innerHTML = `<div>${name}</div><div>${age}</div>`;

       const userDelete = document.createElement('button');
       userDelete.classList.add('delete-button');
       userDelete.innerHTML = 'Delete';

       const userSave = document.createElement('button');
       userSave.classList.add('save-button');
       userSave.innerHTML = 'Save';
       userCard.appendChild(userSave);
       userCard.appendChild(userDelete);      
}
   
async function createUser(){
       const createButton = document.querySelector('button');
       createButton.addEventListener('click',function createInfo(name,age) {
              
       })
       
       const user = await renderUser();
}
createUser();

/*
 function post() {
        axios.put(url) ,{
                name : '',
                age : Number(),
        }
 }    
*/