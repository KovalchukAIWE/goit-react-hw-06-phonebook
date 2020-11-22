import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import ContactForm from './contactForm/ContactForm';
import { ContactsList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Logo } from './logo/Logo';
import { Container } from './container/Container';
import slideLogoAppear from './slideAppear.module.css';
import popFilterStyles from './filter/pop.module.css';

export function App() {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <>
      <Container>
        <CSSTransition
          in
          appear
          timeout={500}
          classNames={slideLogoAppear}
          unmountOnExit
        >
          <Logo />
        </CSSTransition>

        <ContactForm />
        <CSSTransition
          in={contacts.length > 1}
          timeout={250}
          classNames={popFilterStyles}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>
        {contacts.length < 1 && <p>You have no contacts yet</p>}
        <ContactsList />
      </Container>
    </>
  );
}