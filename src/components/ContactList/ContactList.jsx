import React from "react";
import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filter/filtersSlice";
import { selectContacts } from "../../redux/contacts/contactsSlice";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
  });

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
