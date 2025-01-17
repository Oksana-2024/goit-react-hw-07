import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  return (
    <>
       <h1 >Phonebook</h1>
      <ContactForm  />
      <SearchBox   />
      <ContactList  />
    </>
  );
}

export default App;
