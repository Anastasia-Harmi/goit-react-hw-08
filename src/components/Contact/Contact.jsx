import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/contactsSlice";
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.li}>
      <div className={css.divname}>
        <h3 className={css.titlename}>{name}</h3>
        <p className={css.number}>{number}</p>
      </div>
      <button
        className={css.btn}
        type="submit"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
