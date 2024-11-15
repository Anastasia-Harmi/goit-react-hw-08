import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import Routing from "./routing/Routing";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser, register } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Routing />
      </Layout>
    </>
  );
}

export default App;
