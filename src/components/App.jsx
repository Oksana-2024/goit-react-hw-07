import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
       <h1 className="titlePhonebook">Phonebook</h1>
      <ContactForm  />
      <SearchBox   />
      <ContactList  />
      {loading && !error && <b>Request in progress...</b>}
    </>
  );
}

export default App;
