import css from './ContactList';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React from 'react';

const ContactList = ({ children }) => {
  return (
    <ul className={css.contactList}>
      {children}
    </ul>
  );
};

export default ContactList;
