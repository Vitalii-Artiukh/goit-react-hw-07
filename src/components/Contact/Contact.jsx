import { React } from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import clsx from 'clsx';
import css from './Contact.module.css';

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
