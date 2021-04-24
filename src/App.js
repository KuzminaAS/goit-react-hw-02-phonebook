import React, { Component } from "react";

import shortid from "shortid";
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {

    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
      ],
    filter: ''
  }

  addContact = ({name,number}) => {
     const contact = {
        id: shortid.generate(),
        name,
        number
      }

    this.setState(prevState => {
     const { contacts } = prevState;
     
      const result = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number)
      
      if (result) {
        
        alert(`${name} is already in contacts`);
        return {contacts}
      } else {

      const newContacts = [...contacts];
      newContacts.push(contact);
      return {contacts : newContacts}
      }

    })

  }

  onDelete = (index) => {
    this.setState(prevState => {
      const newContacts = [...prevState.contacts]
      newContacts.splice(index, 1);
      return {contacts : newContacts}
    })
  }
  
  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }
  render() {

    const { contacts, filter } = this.state;
    const { addContact, onDelete } = this;

    const normalizeFilter = filter.toLowerCase();
    
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));

    return (
    <div className="App">
  
    <h1>Phonebook</h1>
    <ContactForm onSubmit={addContact}/>

    <h2>Contacts</h2>
    <Filter value = {filter} onChange = {this.changeFilter} />
     <ContactList list={visibleContacts} onDelete={onDelete}/>
    </div>
  )
  }
}

export default App;
