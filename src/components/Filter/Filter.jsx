import { connect } from 'react-redux';
import { addFilter, getFilterValue } from '../../redux/contacts';

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
  onChange: event => dispatch(addFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(Filter);
