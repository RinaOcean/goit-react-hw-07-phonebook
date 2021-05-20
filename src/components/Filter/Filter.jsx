import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { getFilterValue } from '../../redux/contacts/contacts-selectors';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label className="Filter">
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

const mapStateToProps = state => ({
  value: getFilterValue(state),
});

const mapDispatchFromProps = dispatch => ({
  onChange: event => dispatch(actions.addFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(Filter);
