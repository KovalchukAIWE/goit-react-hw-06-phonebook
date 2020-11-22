import React from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ContactsItem } from '../contactsItem/ContactsItem';
import slideStyles from './slide.module.css';
import styles from './ContactList.module.css';

export function ContactsList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter.toLowerCase());
  const filteredContacts = contacts.filter(contact =>
    contact.name ? contact.name.toLowerCase().includes(filter) : contacts,
  );

  return (
    <TransitionGroup component="ul" className={styles.List}>
      {filteredContacts.map(el => (
        <CSSTransition
          in={contacts.length > 0}
          key={el.id}
          timeout={250}
          classNames={slideStyles}
          unmountOnExit
        >
          <ContactsItem key={el.id} contact={el} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}