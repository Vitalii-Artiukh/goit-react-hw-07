import { React } from 'react';
import clsx from 'clsx';
import { MdClose } from 'react-icons/md';

import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={clsx(css.contactsWrapper)}>
      <div className={clsx(css.textWrapper)}>
        <p className={clsx(css.name)}>
          <span className={clsx(css.icon)}>👤 </span>
          {name}
        </p>
        <p className={clsx(css.number)}>
          <span className={clsx(css.icon)}>📞 </span>
          {number}
        </p>
      </div>
      <button
        className={clsx(css.btn)}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        <MdClose />
      </button>
    </div>
  );
};

export default Contact;
