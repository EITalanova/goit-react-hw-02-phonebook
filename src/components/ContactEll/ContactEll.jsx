import css from './ContactEll';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React from 'react';

const ContactEll = ({ contacts }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
                {name}: {number}
                <button>X</button>
          </li>
        );
      })}
    </>
  );
};

export default ContactEll;
