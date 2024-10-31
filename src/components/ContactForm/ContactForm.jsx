import { React, useId } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import contactSchema from '../API/validationSchema';
import css from './ContactForm.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const ContactForm = () => {
  const nameInputId = useId();
  const numberInputId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contact = {
      ...values,
      id: nanoid(),
    };
    // dispatch(addContact({ ...values, id: nanoid() }));
    const action = addContact(contact);
    dispatch(action);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={clsx(css.form)}>
        <div className={clsx(css.formWrapper)}>
          <label htmlFor={nameInputId} className={clsx(css.label)}>
            <span>Name</span>

            <Field
              className={clsx(css.input)}
              type="text"
              name="name"
              id={nameInputId}
            />
            <ErrorMessage name="name" component="span" />
          </label>

          <label htmlFor={numberInputId} className={clsx(css.label)}>
            <span>Number</span>

            <Field
              className={clsx(css.input)}
              type="text"
              name="number"
              id={numberInputId}
            />
            <ErrorMessage name="number" component="span" />
          </label>

          <button className={clsx(css.btn)} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
