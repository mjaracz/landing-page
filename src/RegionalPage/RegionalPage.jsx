// @flow
import React, { Component } from 'react';
import RegionalPageComponent from './RegionalPageComponent';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {paramsProductsActions} from '../redux/actions/paramsProductsActions';
import {paramsCategoriesActions} from "../redux/actions/paramsCategoriesActions";
import type {Product} from "../redux/reducers/getParamsProducts";

interface Props {
  products: Product[],
  isLoading: boolean,
  error: Object,
  paramsProductsActions(): void,
  paramsCategoriesActions(): void
}

class RegionalPage extends Component<Props> {
  componentDidMount() {
    this.props.paramsProductsActions('inDepartment/1/?page=1&limit=10');
    this.props.paramsCategoriesActions('/1');
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
    paramsProductsActions,
    paramsCategoriesActions
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegionalPage);
