// @flow
import React, { Component } from 'react';
import SeasonalPageComponent from './SeasonalPageComponent';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {paramsProductsActions} from '../redux/actions/paramsProductsActions';
import {paramsCategoriesActions} from '../redux/actions/paramsCategoriesActions';
import type {Product} from "../redux/reducers/getParamsProducts";

interface Props {
  error: Object,
  products: Product[],
  isLoading: boolean,
  paramsProductsActions(): void,
  paramsCategoriesActions(): void
}

class SeasonalPage extends Component<Props> {
  componentDidMount() {
    this.props.paramsProductsActions('inDepartment/3/?page=1$limit=10');
    this.props.paramsCategoriesActions('/3');
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
  products: state.products.paramData,
  error: state.products.error
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    paramsProductsActions,
    paramsCategoriesActions
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SeasonalPage);
