// @flow
import React, { Component } from 'react';
import NaturalPageComponent from './NaturalPageComponent';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getProducts} from '../redux/actions/getProducts';
import {getCategories} from "../redux/actions/getCategories";
import type {Product} from "../redux/reducers/getProducts";

interface Props {
  error: Object,
  isLoading: boolean,
  products: Product[],
  getProducts(): void,
  getCategories(): void
}

class NaturalPage extends Component<Props> {
  componentDidMount() {
    this.props.getProducts('inDepartment/2/?page=1&limit=10');
    this.props.getCategories('/2');
  }
  render() {
    const {
      products,
      isLoading,
      error
    } = this.props;
    return <NaturalPageComponent
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
    getCategories,
    getProducts
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NaturalPage);
