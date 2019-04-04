// @flow
import * as React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress/index";
import CardItem from "../HomePage/CardItem/CardItem";
import type {Product} from "../redux/reducers/getParamsProducts";

interface Props {
  products: Product[],
  isLoading: boolean,
  error: Object
}

const SeasonalPageComponent = (props: Props) => {
  const {
    isLoading,
    products
  } = props;
  const  items = (products.length !== 0) ? products.map((product: Product, index: number) => {
      const imgSrc = `https://backendapi.turing.com/images/products/${product.thumbnail}`;
      return <CardItem
        product={product}
        image={imgSrc}
        key={index}
      />
    })
    : null;
  return(
    <main>
      { (isLoading) ? <CircularProgress style={{color: '#f62f5e', margin: 50}} size={90} /> : items }
    </main>
  )
};

export default SeasonalPageComponent;
