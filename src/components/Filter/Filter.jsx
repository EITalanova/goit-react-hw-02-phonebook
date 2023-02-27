import css from './Filter';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contact by name
      <input
        type="text"
        name="name"
        value={filter}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

export default Filter;
