import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { postContact } from "../../redux/contacts/operations";
import { Button, Input } from "antd";
import css from "./ContactForm.module.css";
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const initialValues = {
  name: "",
  number: "",
};
const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const id = nanoid();
    dispatch(postContact({ ...values, id }));
    actions.resetForm();
  };
  return (
    <div>
      {" "}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <span className={css.span}>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
          <span>Number</span>
          <Field type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
