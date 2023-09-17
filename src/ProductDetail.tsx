import { useState } from "react";

export default function ProductDetail(props: {
  product: {
    product: string;
    description: string;
    price: { newprice: string; oldprice: string; discount: string };
  };
}): JSX.Element {
  const { product, description, price } = props.product;

  const [input, setInput] = useState(0);

  interface btntype {
    input: number;
    setInput: React.Dispatch<React.SetStateAction<number>>;
  }

  function increment(): btntype {
    if (input >= 5) {
      alert("Begone Scalpers!");
    } else {
      setInput(input + 1);
    }
    return { input, setInput };
  }

  function decrement(): btntype {
    if (input > 0) {
      setInput(input - 1);
    }
    return { input, setInput };
  }

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
          <div className="product__btns--incdec">
            <button onClick={increment} className="product__btns inc">
              +
            </button>
            <span className="product_quantity">{input}</span>
            <button onClick={decrement} className="product__btns dec">
              -
            </button>
          </div>

          <button className="product__btns--cartbtn">ADD TO CART</button>
        </div>
      </div>
    </>
  );
}
