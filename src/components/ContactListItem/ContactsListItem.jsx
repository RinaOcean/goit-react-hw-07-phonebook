import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeContact, getFilteredContactList } from '../../redux/contacts';

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

const mapStateToProps = state => ({
  contactsItems: getFilteredContactList(state),
});

const mapDispatchFromProps = dispatch => ({
  onDelete: id => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(ContactsListItem);
