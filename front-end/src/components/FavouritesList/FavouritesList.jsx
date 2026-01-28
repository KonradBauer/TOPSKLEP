import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import styles from "./FavouritesList.module.css";

export const FavouritesList = ({ products }) => {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          <div>
            {products.map((product) => (
              <FavouriteProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </CenteredContent>
  );
};
