import React from "react";
import css from "./Contact.module.css";
const Contact = ({ id, name, number, onDeleteProfile }) => {
  return (
    <div>
      <li className={css.li}>
        <div className={css.divname}>
          <h3 className={css.titlename}>{name}</h3>
          <p className={css.number}>{number}</p>
        </div>
        <button
          className={css.btn}
          type="submit"
          onClick={() => onDeleteProfile(id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
