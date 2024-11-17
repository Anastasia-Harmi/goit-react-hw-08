import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { logIn } from "../../redux/auth/operations";

import { useDispatch } from "react-redux";
import { LoginUserSchema } from "../../utils/schemas";
import css from "./LoginPage.module.css";
//в initialvalue пишемо поля, які треба зібрати з форми
const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();

  // у values бібл formik збирає значення з полів сама у цей {}values. якщо треба взяти значення з конкретного поля, то values.name  . name - це значення name input
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={LoginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
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

          <button type="submit"> Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
