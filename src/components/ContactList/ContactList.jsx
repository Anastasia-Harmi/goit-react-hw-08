import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filter/filtersSlice";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <ul>
      {contacts.map((item) => (
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
