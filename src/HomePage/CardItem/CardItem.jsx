//@flow
import * as React from 'react';
import type { Product } from "../../redux/reducers/getProducts";
import CardItemComponent from "./CardItemComponent";

export type Props = {
  key: string,
  product: Product,
  image: ImageData,
}

class CardItem extends React.Component<Props> {
  render() {
    const {
      product,
      image
    } = this.props;
    return <CardItemComponent
        image={image}
        product={product}
    />

  }
}

export default CardItem;
