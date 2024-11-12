import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filter/filtersSlice";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contacts/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
  });
  return (
    <ul>
      {filteredContacts.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
