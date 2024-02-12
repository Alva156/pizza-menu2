import Product from "./Product.js";
import gamesData from "./gamesData.js";

function ProductList() {
  const games = gamesData;

  return (
    <div class="py-3 py-md-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h4 class="mb-4">Our Products</h4>
          </div>
          {games.map((n) => (
            <Product gamesObj={n} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
