import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name too short!')
    .max(50, 'Name too long!')
    .required('Name is required!'),
  number: Yup.string()
    .min(3, 'Phone number is too short!')
    .max(50, 'Phone number is too long!')
    .required('Phone number is required!'),
});

export default contactSchema;
