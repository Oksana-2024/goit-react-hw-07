import * as yup from "yup";
import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

const ContactForm = () => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Min. length is 3 symbols")
      .max(50, "Max. length is 50 symbols")
      .required(),
    number: yup
      .string()
      .min(3, "Min. length is 3 symbols")
      .max(50, "Max. length is 50 symbols")
      .required(),
  });

  return (
    <>
      <Formik
        onSubmit={(values, actions) => {
          values.id = nanoid();
          dispatch(addContact(values));
          actions.resetForm();
        }}
        initialValues={{
          id: "",
          name: "",
          number: "",
        }}
        validationSchema={schema}
      >
        <Form className={s.formBox}>
          <label htmlFor="name">Name</label>
          <Field className={s.input} type="text" name="name" id="name" />
          <ErrorMessage className={s.textError} name="name" component="span" />
          <label htmlFor="number">Number</label>
          <Field className={s.input} type="tel" name="number" id="number" />
          <ErrorMessage
            className={s.textError}
            name="number"
            component="span"
          />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
