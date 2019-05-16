const url = 'https://test-users-api.herokuapp.com/users/';

async function getUser() {
    try {
           const response =  await axios.get(url)
           const way = response.data.data;
           renderUsers(way);
           console.log(way);   
           } catch (error) {    
    }  
}

getUser();

 function renderUsers(way) {

       way.forEach(el => {

       const userContainer = document.querySelector('.users-container');
       const userCard = document.createElement('div');
       userCard.classList.add('user-card');
       userContainer.appendChild(userCard);

       userCard.innerHTML = `<div>${el.name}</div><div>${el.age}</div>`;

       const userDelete = document.createElement('button');
       userDelete.classList.add('delete-button');
       userDelete.innerHTML = 'Delete';     
       
       const userSave = document.createElement('button');
       userSave.classList.add('save-button');
       userSave.innerHTML = 'Save';
       userCard.appendChild(userSave);
       userCard.appendChild(userDelete);
       
       userDelete.addEventListener('click',(id)=>{
              deleteFromServer(id);
              const changeClass = document.querySelector('.user-card');
              changeClass.classList.remove('user-card');
              changeClass.classList.add('display-none');
       })
       userSave.addEventListener('click',()=>{
              saveToServer();
       })
       });
}

function deleteFromServer() {
       axios.delete(url,{}).then(
             
       )
}
 const createButton = document.querySelector('.button');
 
 async function createUser() {
       createButton.addEventListener('click',)
 }
