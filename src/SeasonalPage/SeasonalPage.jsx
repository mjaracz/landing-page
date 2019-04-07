// @flow
import React, { Component } from 'react';
import SeasonalPageComponent from './SeasonalPageComponent';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getProducts} from '../redux/actions/getProducts';
import {getCategories} from '../redux/actions/getCategories';
import type {Product} from "../redux/reducers/getProducts";

interface Props {
  error: Object,
  products: Product[],
  isLoading: boolean,
  getProducts(): void,
  getCategories(): void
}

class SeasonalPage extends Component<Props> {
  componentDidMount() {
    this.props.getProducts('inDepartment/3/?page=1$limit=10');
    this.props.getCategories('/3');
  }
  render() {
    const {
      isLoading,
      products,
      error
    } = this.props;
    return <SeasonalPageComponent
      isLoading={isLoading}
      products={products}
      error={error}
    />
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.products.isLoading,
  products: state.products.products,
  error: state.products.error
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getProducts,
    getCategories
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SeasonalPage);
