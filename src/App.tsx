import "./App.scss";
import ProductDetail from "./ProductDetail";
import ProductImg from "./ProductImg";
import products from "./data";

export default function App(): JSX.Element {
  return (
    <div className="product-main">
      <ProductImg />
      {products.map((product, index) => (
        <ProductDetail key={index} product={product} />
      ))}
    </div>
  );
}
