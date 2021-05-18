import React from 'react';
import { connect } from 'react-redux';

import ContactsList from './components/ContactsList';
import ContactsListItem from './components/ContactListItem';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';

import './App.scss';

function App({ items }) {
  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {items.length > 0 ? (
        <>
          <Filter />
          <ContactsList>
            <ContactsListItem />
          </ContactsList>
        </>
      ) : (
        <span>You have no contacts yet </span>
      )}
    </div>
  );
}
const mapStateToProps = state => ({
  items: state.contacts.items,
});

export default connect(mapStateToProps)(App);
