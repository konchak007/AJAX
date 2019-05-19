const url = 'https://test-users-api.herokuapp.com/users/';
const createButton = document.querySelector('.button');
const error = document.querySelector('.error');



async function getUser() {
    try {
           const response =  await axios.get(url)
           const way = response.data.data;
           if (response.status ===200) {
                  renderUsers(way); 
           } else {
                  throw new Error();
           }
           
           } catch (error) {  
                    error.innerHTML = 'Cannot get user account' 
    }  
}

getUser();

async function createUser() {
       const name = document.getElementById('#name').value;
           
        const age = document.getElementById('#age').value;
        
        const userInfo = {name , age};
        renderUsers([userInfo])
try {   const postUser = await axios.put(url,{
       name: name,
       age : age
});
       // document.getElementById('#name').value= '';
      // document.querySelector('#age').value = '';
       
              
             
     
      ;
} catch (error) {
       
}
    
}
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
       
       userDelete.addEventListener('click',()=>{
              deleteFromServer(el.id,userCard);
          
       })
       
       });
}

 async function deleteFromServer(id,userCard) {
        try {
               const deleteUser = await axios.delete('https://test-users-api.herokuapp.com/users/'+`${id}`)
                 if (deleteUser.status===200) {
                       userCard.remove(); 
                 } else {
                        throw new Error();
                 }   
        } catch (error) {
               error.innerHTML = 'Cannot delete user account';
        }
      
}

