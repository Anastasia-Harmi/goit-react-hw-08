import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ contacts, onDeleteProfile }) => {
  return (
    <div>
      <ul className={css.ul}>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteProfile={onDeleteProfile}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
