import { React, useId } from 'react';
import clsx from 'clsx';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

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
