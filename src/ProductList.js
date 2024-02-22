import Product from "./Product.js";
import gamesData from "./gamesData.js";

function ProductList() {
  const gameList = gamesData.map((game) => (
    <Product gamesObj={game} key={game.title} /> // Changed key to game.title for uniqueness
  ));

  const gtaList = gamesData
    .filter((game) => game.title.includes("Grand Theft Auto")) // Updated condition to filter GTA games by title
    .map((filteredGame) => (
      <Product gamesObj={filteredGame} key={filteredGame.title} />
    )); // Corrected the props

  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-4">Our Products</h4>
          </div>
          <h1>All Games</h1>
          {gameList}
          <h1>GTA</h1>
          {gtaList}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
