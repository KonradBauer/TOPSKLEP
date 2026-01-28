import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";

export const FavouritesList = ({ products }) => {
  return (
    <CenteredContent>
      <h2>Ulubione</h2>
      <div>
        {products.map((product) => (
          <FavouriteProduct key={product.id} product={product} />
        ))}
      </div>
    </CenteredContent>
  );
};
