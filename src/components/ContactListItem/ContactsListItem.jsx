import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';

import './ContactsListItem.scss';

const ContactsListItem = ({ onDelete, contactsItems }) => (
  <>
    {contactsItems.map(({ id, name, number }) => {
      return (
        <li key={id} className="ContactsListItem">
          {name}: {number}
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </>
);

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};

const getFilteredContactList = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();

  return allContacts.filter(item =>
    item.name.toLocaleLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contactsItems: getFilteredContactList(items, filter),
});

const mapDispatchFromProps = dispatch => ({
  onDelete: id => dispatch(actions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(ContactsListItem);
