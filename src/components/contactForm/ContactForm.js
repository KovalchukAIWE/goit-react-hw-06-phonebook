import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { CSSTransition } from 'react-transition-group';
import { addContact } from '../../redux/actions/phonebookActions';
import { ButtonAdd } from '../buttons/ButtonAdd';
import { CustomInput } from '../customInput/CustomInput';
import { Notification } from '../notification/Notification';
import slideNotiAppear from '../notification/slide.module.css';
import styles from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
    error: false,
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    if (
      this.props.state.contacts.items.find(
        contact => contact.name === this.state.name,
      )
    ) {
      this.setState({ error: true, name: '', number: '' });
      setTimeout(() => {
        this.setState({ error: false });
      }, 2500);
    } else {
      const contact = {
        name: this.state.name,
        number: this.state.number,
        id: uuidv4(),
      };
      this.props.addContact(contact);
      this.setState({ name: '', number: '' });
    }
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmitForm} className={styles.form}>
          <CustomInput
            label="name"
            name="name"
            type="text"
            value={this.state.name}
            handleChange={this.handleChange}
            required
          />
          <CustomInput
            label="number"
            name="number"
            type="text"
            value={this.state.number}
            handleChange={this.handleChange}
            required
          />

          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </form>
        <CSSTransition
          in={this.state.error}
          timeout={250}
          classNames={slideNotiAppear}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = {
  addContact: addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);