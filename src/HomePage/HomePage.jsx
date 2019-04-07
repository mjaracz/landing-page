// @flow
import * as React from 'react';
import './HomePage.css';

import { bindActionCreators } from 'redux';
import { getProducts } from '../redux/actions/getProducts';
import { getCategories } from "../redux/actions/getCategories";
import { Product } from '../redux/reducers/getProducts';
import { connect } from 'react-redux';
import HomePageComponent from "./HomePageComponent";


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
    this.props.getCategories('/1');
  };

  render() {
    const {
      isLoading,
      products,
    } = this.props;
    return <HomePageComponent
      products={products}
      isLoading={isLoading}
    />
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.products.isLoading,
  products: state.products.products,
  error: state.products.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getCategories,
    getProducts
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
