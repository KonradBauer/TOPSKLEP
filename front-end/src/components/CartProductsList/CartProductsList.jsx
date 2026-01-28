import { CenteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";
import styles from "./CartProductsList.module.css";

export const CartProductsList = ({ products }) => {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Koszyk</h2>
        <div>
          <div>
            {products.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </CenteredContent>
  );
};
