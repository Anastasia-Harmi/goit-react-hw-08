import React from "react";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

const ContactList = ({ onDeleteProfile }) => {
  const contacts = useSelector((state) => state.contacts.items);

  const filter = useSelector((state) => state.filter.name);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={css.ul}>
        {filteredContacts.length > 0 &&
          filteredContacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              userName={contact.name}
              userPhone={contact.number}
              userId={contact.id}
              onDeleteProfile={onDeleteProfile}
            />
          ))}
      </ul>
      {/* <ul className={css.ul}>
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
      </ul> */}
    </div>
  );
};

export default ContactList;
