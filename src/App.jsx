import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import Contact from "./components/Contact/Contact";
import { nanoid } from "nanoid";
function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem("contacts")) ?? [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddProfile = (formData) => {
    const finalUsers = { ...formData, id: nanoid() };
    setContacts((prevState) => [...prevState, finalUsers]);
  };
  const onDeleteProfile = (profileId) => {
    const updatedUsers = contacts.filter((user) => user.id !== profileId);

    setContacts(updatedUsers);
  };
  const filteredUsers = contacts.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <>
      <div className="wrapper">
        <h1>Phonebook</h1>
        <ContactForm onAddProfile={onAddProfile} />
        <SearchBox filter={filter} setFilter={setFilter} />
        <ContactList
          contacts={filteredUsers}
          onDeleteProfile={onDeleteProfile}
        />
      </div>
    </>
  );
}

export default App;
