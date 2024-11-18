import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, postContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../../components/Contact/Contact";
import ContactForm from "../../components/ContactForm/ContactForm";
import css from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectFilteredContacts);

  console.log(contactList);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <main>
      <section>
        <ContactForm />
      </section>
      <section className={css.grid}>
        {contactList.map((contact) => (
          <Contact {...contact} key={contact.id} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
