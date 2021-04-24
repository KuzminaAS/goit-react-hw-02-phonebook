import React from 'react';
// import styles from './ContactListItem.module.css'
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onDelete }) => {
    return (
        <li>
            {name} {number}
            <button type='button' onClick={onDelete}>X</button>
        </li>
    )
};

export default ContactListItem;
ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}
