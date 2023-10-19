import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { changeCategory } from "../../../redux/slices/catalogItemsSlice";

function Categories(currentCategory) {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(state => state.categories);

  function handleClick(categoryId) {
    if (currentCategory !== categoryId) {
      dispatch(changeCategory({ categoryId }));
      currentCategory = categoryId;
    }
  }

  const categoriesList = categories.categories.map((item) => {
    return (
      <li className="nav-item">
        <Link
          onClick={() => handleClick(item.id)}
          className={`${currentCategory === item.id ? "active" : ""} nav-link`}
          to="."
        >
          {item.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul className="catalog-categories">
        <li className="nav-item">
          <Link
            className={`${currentCategory === item.id ? "active" : ""} nav-link`}
            onClick={() => handleClick(0)}
            to="."
          >
            Все
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Categories;
