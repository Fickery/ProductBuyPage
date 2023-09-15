// import products from "./data";

export default function ProductDetail(props: {
  product: {
    product: string;
    description: string;
    price: { newprice: string; oldprice: string; discount: string };
  };
}): JSX.Element {
  const { product, description, price } = props.product;

  return (
    <>
      <div className="product">
        <p className="product__brand">Litz Borlton</p>
        <p className="product__name">{product}</p>
        <p className="product__desc">{description}</p>
        <div className="product__pricing">
          <div className="product__currentprice">
            <span className="product__newprice">{price.newprice}</span>
            <span className="product__discount">{price.discount}</span>
          </div>
          <p className="product__oldprice">{price.oldprice}</p>
        </div>
        <div className="product__btns">
          <div className="product__incdec-main">
            <button className="product__btns product__incdec">+</button>
            <span>0</span>
            <button className="product__btns product__incdec">-</button>
          </div>
          <button className="product__btn">ADD TO CART</button>
        </div>
      </div>
    </>
  );
}
