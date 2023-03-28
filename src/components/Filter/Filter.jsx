import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './FilterStyled';

import { userFilter } from '../../redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handleFilterChange = e => {
    const filterValue = e.target.value;
    dispatch(userFilter(filterValue));
  };

  return (
    <div>
      <Label>Find contacts by name:</Label>
      <Input type="text" onChange={handleFilterChange} defaultValue={filter} />
    </div>
  );
};
