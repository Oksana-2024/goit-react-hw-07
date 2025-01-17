import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
 const dispatch = useDispatch()
const filter = useSelector((state) => state.filters.name);
  return (
    <div className={s.searchBox}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.searchInput}
        type="text"
        value={filter}
        onChange={(e)=>dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
