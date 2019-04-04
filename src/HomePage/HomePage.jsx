// @flow
import * as React from 'react';
import CardItem from './CardItem/CardItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import './HomePage.css';

import { bindActionCreators } from 'redux';
import { getProducts } from '../redux/actions/getProducts';
import { getCategories } from "../redux/actions/getCategories";
import { Product } from '../redux/reducers/getParamsProducts';
import { connect } from 'react-redux';


type Props = {
  getProducts(): void,
  getCategories(): void,
  products: Product[],
  isLoading: boolean,
  error: Object
}

class HomePage extends React.Component<Props> {
  componentDidMount() {
    this.props.getProducts('?page=1&limit=10');
    this.props.getCategories('/1')
  };

  render() {
    const {
      isLoading,
      products,
    } = this.props;
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
        { (isLoading) ? <CircularProgress style={{color: '#f62f5e', margin: 150}} size={90} /> : items }
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.products.isLoading,
  products: state.products.paramData,
  error: state.products.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getProducts,
    getCategories
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
