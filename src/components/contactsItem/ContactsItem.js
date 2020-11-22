import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/actions/phonebookActions';
import { ButtonRemove } from '../buttons/ButtonRemove';
import styles from './ContactsItem.module.css';

export function ContactsItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleClick = e => dispatch(removeContact(e.currentTarget.dataset.id));

  return (
    <li className={styles.ListItem}>
      <span className={styles.Text}>{name}: </span>
      <span className={styles.Number}>{number}</span>
      <ButtonRemove type="button" id={id} onClick={handleClick} />
    </li>
  );
}