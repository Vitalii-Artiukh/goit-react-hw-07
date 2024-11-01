import React from 'react';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors';
import clsx from 'clsx';
import css from './Error.module.css';

const Error = () => {
  const errorMessage = useSelector(selectError);
  return <div className={clsx(css.text)}>{errorMessage}</div>;
};

export default Error;
