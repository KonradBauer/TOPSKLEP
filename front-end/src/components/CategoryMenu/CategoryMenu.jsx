import { CATEGORIES } from "../../constants/categories.js";
import { NavLink } from "react-router-dom";
import styles from "./CategoryMenu.module.css";

export const CategoryMenu = () => {
  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map(({ path, categoryName }) => (
          <li key={path}>
            <NavLink to={path}>{categoryName}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
