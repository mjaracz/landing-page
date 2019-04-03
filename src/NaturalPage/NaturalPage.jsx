// @flow
import React, { Component } from 'react';
import NaturalPageComponent from './NaturalPageComponent';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {paramsProductsActions} from '../redux/actions/paramsProductsActions';
import type {Product} from "../redux/reducers/getParamsProducts";
import {paramsCategoriesActions} from "../redux/actions/paramsCategoriesActions";

interface Props {
  error: Object,
  isLoading: boolean,
  products: Product[],
  paramsProductsActions(): void,
  paramsCategoriesActions(): void
}

class NaturalPage extends Component<Props> {
  componentDidMount() {
    this.props.paramsProductsActions('inDepartment/2/?page=1&limit=10');
    this.props.paramsCategoriesActions('/2');
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
  products: state.products.paramData,
  error: state.products.error
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    paramsProductsActions,
    paramsCategoriesActions
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NaturalPage);
