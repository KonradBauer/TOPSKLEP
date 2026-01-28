import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";
import { GENDERS } from "../../constants/categories.js";

export const MainMenu = () => {
  return (
    <ul className={styles.mainMenu}>
      {GENDERS.map(({ nav, path }, index) => (
        <NavLink key={index} to={path}>
          {nav}
        </NavLink>
      ))}
    </ul>
  );
};
