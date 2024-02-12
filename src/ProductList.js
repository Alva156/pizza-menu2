import Product from "./Product.js";

function ProductList() {
  return (
    <div class="py-3 py-md-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h4 class="mb-4">Our Products</h4>
          </div>
        </div>
        <Product />
      </div>
    </div>
  );
}

export default ProductList;
