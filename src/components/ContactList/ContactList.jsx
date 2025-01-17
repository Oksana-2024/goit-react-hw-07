import {  useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  return (
    <ul className={s.contactsList}>
      {contacts
        .filter(({ name }) => name.toLowerCase().match(filter.toLowerCase()))
        .map(({ id, number, name }) => (
          <li className={s.contactItem} key={id}>
            <Contact number={number} name={name} id={id} />
          </li>
        ))}
    </ul>
  );
};
export default ContactList;
