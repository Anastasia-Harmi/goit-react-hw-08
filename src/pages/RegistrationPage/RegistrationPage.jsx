import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { RegisterUserSchema } from "../../utils/schemas";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationPage.module.css";
import { useDispatch } from "react-redux";
const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={RegisterUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name:</span>
            <Field
              type="text"
              name="name"
              className={css.input}
              placeholder="Ivan Shevchenko"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name" //вказуємо той самий name до якого прив'язуєм
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              className={css.input}
              placeholder="example.email@example.com"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              className={css.input}
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>

          <button type="submit"> Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
