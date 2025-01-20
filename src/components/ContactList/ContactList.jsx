import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, number, name }) => (
        <li className={s.contactItem} key={id}>
          <Contact number={number} name={name} id={id} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
