import { Link } from "react-router-dom";
import styles from "./IconMenu.module.css";
import BAG_ICON from "../../assets/bag.svg";
import HEART from "../../assets/favourite.svg";

export const IconMenu = () => {
  const cartItems = 2;

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/ulubione" />
        <img src={HEART} alt="HEART" />
      </li>
      <li>
        <Link to="/koszyk" />
        <img src={BAG_ICON} alt="HEART" />
        <div className={styles.numberOfProducts}>{cartItems}</div>
      </li>
    </ul>
  );
};
