import React from 'react';
// import styles from './Filter.module.css';

const Filter = ({value, onChange }) =>  {
   
    return (
        <label>
            Find contacts by name
        <input
            type="text"
            name="name"
            value={value}
            onChange = {onChange}
            placeholder="Search for name..."
            />
        </label>
    )
   

};

export default Filter;


