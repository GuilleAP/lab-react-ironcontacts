import './App.css';
import contacts from './contacts.json'
import { useState } from "react";

function App() {

  const [firstsContacts, setContactList] = useState(contacts.slice(0, 5))

  
  const addRandom = () => {
    const newArr = [...firstsContacts];
    newArr.push(contacts[Math.floor(Math.random() * contacts.length) + 4]);
    setContactList(newArr);
    console.log(firstsContacts)
  };

  const sortListAlphabet = () => {

    const sortArr = [...firstsContacts];
    setContactList(sortArr.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }

  const sortListPopularity = () => {

    const sortArr = [...firstsContacts];
    setContactList(sortArr.sort((a, b) => (a.popularity > b.popularity ? -1 : 1)));
  }

  const deleteContact = (id) => {
    const newArray = [...firstsContacts];

    for(let i = 0; i < newArray.length; i++) {
      if(newArray[i].id === id) newArray.splice(i, 1);
    }

    setContactList(newArray);
  }

  return (
    <div className="App">

      <div>
        <h1>Iron Contacts</h1>

      
        <button onClick={() => addRandom()}>Add random contact</button>  
        <button onClick={() => sortListAlphabet()}>Sort Alphebetically</button> 
        <button onClick={() => sortListPopularity()}>Sort Popularity</button> 
      </div>

      <div>
        <table className='contacts'>
          <tr>
            <th><h2>Picture</h2></th>
            <th><h2>Name</h2></th>
            <th><h2>Popularity</h2></th>
            <th><h2>Won Oscar</h2></th>
            <th><h2>Won Emmy</h2></th>
          </tr>
          {
            firstsContacts.map((contact) => {
              return (
                <tr>
                  <td><img src={contact.pictureUrl} alt="" width="40px" heigth="80px"></img></td>
                  <td><h4>{contact.name}</h4></td>
                  <td><h4>{contact.popularity}</h4></td>
                  {
                    contact.wonOscar ? (
                      <td><h3>🏆</h3></td>
                    ) :
                    (
                      <td><h3> </h3></td>
                    )
                  }
                  {
                    contact.wonEmmy ? (
                      <td><h3>🌟</h3></td>
                    ) :
                    (
                      <td><h3> </h3></td>
                    )
                  }

                  <td><button onClick={() => deleteContact(contact.id) }> Delete Contact </button></td>
                  
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  );
}

export default App;
