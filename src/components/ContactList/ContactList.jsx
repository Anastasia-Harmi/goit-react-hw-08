import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filter/filtersSlice";
import { selectContacts } from "../../redux/contacts/contactsSlice";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

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
