// @flow
import * as React from 'react';
import type {Product} from "../redux/reducers/getProducts";
import CardItem from "./CardItem/CardItem";
import CircularProgress from "@material-ui/core/CircularProgress";

interface Props {
  isLoading: boolean,
  products: Product
}

const HomePageComponent = (props: Props) => {
  const { products, isLoading } = props;
  const  items = (products.length !== 0) ? products.map((product: Product, index: number) => {
    const imgSrc = `https://backendapi.turing.com/images/products/${product.thumbnail}`;
    return <CardItem
      product={product}
      image={imgSrc}
      key={index}
    />
  }) : null;
  return (
    <main>
      {
        (isLoading)
          ? <CircularProgress style={{color: '#f62f5e', margin: 150}} size={90} />
          : items
      }
    </main>
  )
};

export default HomePageComponent;
