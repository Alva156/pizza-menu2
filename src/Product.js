function Product(props) {
  return (
    <div class="col-md-3">
      <div className="product-card">
        <div className="product-card-img">
          <label className="stock bg-success">In Stock</label>
          <img src={props.gamesObj.pictures} alt="Red MI Note 8" />
        </div>
        <div className="product-card-body">
          <p className="product-brand">Console</p>
          <h5 className="product-name">
            <a href=""> {props.gamesObj.title} </a>
          </h5>
          <div>
            <span className="selling-price">{props.gamesObj.price}</span>
            <span className="original-price">$300</span>
          </div>
          <div className="mt-2">
            <a href="" className="btn btn1">
              Add To Cart
            </a>
            <a href="" className="btn btn1">
              {" "}
              <i className="fa fa-heart"></i>{" "}
            </a>
            <a href="" className="btn btn1">
              {" "}
              View{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
