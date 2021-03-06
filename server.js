const url = 'https://test-users-api.herokuapp.com/users/';

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

async function postUser(userInfo) {

       try {
            const SaveToServer = await axios.post(url,userInfo)  
           
            if (SaveToServer.status == 200) {
                  renderUserCard({
                                       ...SaveToServer.data.data,
                                       id: SaveToServer.data.data._id})
            }else{
                   throw new Error();
            }
         document.getElementById('#name').value='';
         document.getElementById('#age').value=0;    
       } catch (error) {
              error.innerHTML = 'Cannot save user account';
       }
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

