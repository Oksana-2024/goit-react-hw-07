import { IoPerson } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.contactContainer}>
        <div className={s.box}>
          <IoPerson size={24} /> <p className={s.text}>{name}</p>
        </div>
        <div className={s.box}>
          <MdPhone size={24} /> <p>{number}</p>
        </div>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} className={s.buttonDel} type="button">
        Delete
      </button>
    </>
  );
};
export default Contact;
