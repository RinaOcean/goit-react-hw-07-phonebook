import PropTypes from 'prop-types';
import './ContactsList.scss';

const ContactsList = ({ children }) => (
  <ul className="ContactsList">{children}</ul>
);

ContactsList.propTypes = {
  children: PropTypes.node,
};

export default ContactsList;
