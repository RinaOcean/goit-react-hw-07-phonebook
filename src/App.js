import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

import ContactsList from './components/ContactsList';
import ContactsListItem from './components/ContactListItem';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';

import contactsOperations from './redux/contacts/contacts-operations';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className="phonebook">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>

        {this.props.items.length > 0 ? (
          <>
            <Filter />

            <ContactsList>
              {this.props.isLoading && <Spinner animation="border" />}
              <ContactsListItem />
            </ContactsList>
          </>
        ) : (
          <span>You have no contacts yet </span>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  items: state.contacts.items,
  isLoading: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
