import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { logIn } from "../../redux/auth/operations";

import { useDispatch } from "react-redux";
import { LoginUserSchema } from "../../utils/schemas";
import css from "./LoginPage.module.css";

import { useNavigate, useNavigation } from "react-router-dom";
import routes from "../../routing/routes";
//в initialvalue пишемо поля, які треба зібрати з форми
const INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // у values бібл formik збирає значення з полів сама у цей {}values. якщо треба взяти значення з конкретного поля, то values.name  . name - це значення name input
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .then(() => {
        // Якщо логін успішний, перенаправляємо на головну сторінку
        navigate(routes.home); // Перехід на домашню сторінку
      })
      .catch((error) => {
        // Тут можна обробити помилки, якщо вони є
        console.error("Login failed", error);
      });

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
