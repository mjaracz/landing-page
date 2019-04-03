// @flow
import * as React from 'react';
import './CardItem.css';
import type {Product} from "../../redux/types";

type Props = {
  product: Product,
  image: ImageData
}

const CardItemComponent = (props: Props) => {
  const {
    product,
    image
  } = props;
  return(
    <div className="main__card">
      <img src={image} alt={product.thumbnail} className='card__image'/>
      <p className="card__name">
        { product.name }
        <span className="card__price">
          price: { product.price }
        </span>
      </p>
      <p className="card__description">
        { product.description }
      </p>
      <button className="card__button">
        Buy now
      </button>
    </div>
  )
};

export default CardItemComponent;
