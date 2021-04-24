import React from 'react';
// import styles from './ContactList.module.css';
import ContactListItem from '../ContactListItem';

const ContactList = ({ list, onDelete }) => {

    const contactElements = list.map((item, index) => <ContactListItem  key={item.id} {...item} onDelete={()=>onDelete(index)} />)
    return (
        <ul>
            {contactElements}
        </ul>
    )
};

export default ContactList;
