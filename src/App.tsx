import "./App.scss";
import CarouselComponent from "./CarouselComponent";
import ProductDetail from "./ProductDetail";
import { data } from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App(): JSX.Element {
  const carouselImage = data.products[0].images;

  return (
    <div className="product-main">
      <CarouselComponent images={carouselImage} />
      {data.products.map((product, index) => (
        <ProductDetail key={index} product={product} />
      ))}
    </div>
  );
}
