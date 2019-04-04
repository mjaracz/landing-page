// @flow
import React, { Component } from 'react';
import RegionalPageComponent from './RegionalPageComponent';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getProducts} from '../redux/actions/getProducts';
import {getCategories} from "../redux/actions/getCategories";
import type {Product} from "../redux/reducers/getParamsProducts";

interface Props {
  products: Product[],
  isLoading: boolean,
  error: Object,
  getProducts(): void,
  getCategories(): void
}

class RegionalPage extends Component<Props> {
  componentDidMount() {
    this.props.getProducts('inDepartment/1/?page=1&limit=10');
    this.props.getCategories('/1');
  }
  render() {
    const {
      isLoading,
      products,
      error
    } = this.props;
    return <RegionalPageComponent
      isLoading={isLoading}
      products={products}
      error={error}
    />
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.products.isLoading,
  products: state.products.paramData,
  error: state.products.error
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getCategories,
    getProducts
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegionalPage);
