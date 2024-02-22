import { useState } from "react";

function Product({ gamesObj }) {
  // const hour = new Date().getHours();
  // const openHour = 12;
  // const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);
  // if(isOpen){}
  // if ({gamesData.isSoldout = false}) {
  //   return null;
  // }
  // if (gamesObj.quantity === 0) return null;
  const [isFav, setIsFav] = useState(false);
  return (
    <div class="col-md-3">
      <div className="product-card">
        <div className="product-card-img">
          {gamesObj.quantity === 0 ? (
            <label className="stock bg-danger">Out of Stock</label>
          ) : (
            <label className="stock bg-success">In Stock</label>
          )}
          <img
            src={gamesObj.pictures}
            alt={gamesObj.title}
            className={`${gamesObj.quantity === 0 ? "sold-out" : ""}`}
          />
        </div>
        <div className="product-card-body">
          <p className="product-brand">Console</p>
          <h5 className="product-name">
            <a href=""> {gamesObj.title} </a>
          </h5>
          <div>
            <span className="selling-price">{gamesObj.price}</span>
            <span className="original-price">$300</span>
          </div>
          <div className="mt-2">
            {/* <a href="" className="btn btn1">
              Add To Cart
            </a> */}
            <button className="btn btn1">Add to Cart</button>
            <button classname="btn btn1" onClick={() => setIsFav(!isFav)}>
              {isFav ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-heart"></i>
              )}
            </button>
            {/* <a href="" className="btn btn1">
              {" "}
              <i className="fa fa-heart"></i>{" "}
            </a> */}
            <a href="" className="btn btn1">
              {" "}
              View{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div class="col-md-3">
  //     <div
  //       className="product-card"
  //       style={{
  //         filter: gamesObj.quantity === 0 ? "grayscale(100%)" : "none",
  //       }}
  //     >
  //       <div className="product-card-img">
  //         {gamesObj.quantity === 0 ? (
  //           <label className="stock bg-danger">Out of Stock</label>
  //         ) : (
  //           <label className="stock bg-success">In Stock</label>
  //         )}

  //         <img
  //           src={gamesObj.pictures}
  //           alt="Red MI Note 8"
  //           className="sold-out"
  //         />
  //       </div>
  //       <div className="product-card-body">
  //         <p className="product-brand">Console</p>
  //         <h5 className="product-name">
  //           <a href=""> {gamesObj.title} </a>
  //         </h5>
  //         <div>
  //           <span className="selling-price">{gamesObj.price}</span>
  //           <span className="original-price">$300</span>
  //         </div>
  //         <div className="mt-2">
  //           <a href="" className="btn btn1">
  //             Add To Cart
  //           </a>
  //           <a href="" className="btn btn1">
  //             {" "}
  //             <i className="fa fa-heart"></i>{" "}
  //           </a>
  //           <a href="" className="btn btn1">
  //             {" "}
  //             View{" "}
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Product;
