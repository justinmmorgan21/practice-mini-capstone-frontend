import { ProductsPage } from "./ProductsPage";

export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      <div className="cards">
        {props.products.map(product => (
          <div className="card" key={product.id}>
            <h3 className="name">{product.name}</h3>
            <p>{product.description}</p>
            <img src={product.images[0].url} />
            {/* <p>{product.images[0].url}</p> */}
          </div>
        ))};
      </div>
    </div>
  );
}
