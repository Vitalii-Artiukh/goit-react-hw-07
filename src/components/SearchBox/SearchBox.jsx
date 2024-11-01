import { React, useId } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import clsx from 'clsx';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchName = useId();

  return (
    <div className={clsx(css.searchWrapper)}>
      <label htmlFor={searchName} className={clsx(css.label)}>
        Find contacts by name
        <input
          className={clsx(css.input)}
          type="text"
          id={searchName}
          onChange={event => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
