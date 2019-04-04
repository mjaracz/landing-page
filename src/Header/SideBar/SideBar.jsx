//@flow
import * as React from 'react';
import SideBarComponent from './SideBarComponent';
import Item from '../../redux/reducers/getParamsCategories';
import './SideBar.css';

import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/getProducts';
import { bindActionCreators } from 'redux';

type Props = {
  liItems: Item[],
  isLoading: boolean,
  getProducts(): void
}

class SideBar extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }
  }
  onClickCategory = e => {
    e.preventDefault();
    const { getProducts } = this.props;
    switch (e.target.classList.value) {
      case 'French': {
        const params = `inCategory/1`;
        return getProducts(params)
      }
      case 'Irish': {
        const params = `inCategory/3`;
        return getProducts(params)
      }
      case 'Italian': {
        const params = `inCategory/2`;
        return getProducts(params)
      }
      case 'Animal': {
        const params = `inCategory/4`;
        return getProducts(params)
      }
      case 'Flower': {
        const params = `inCategory/5`;
        return getProducts(params)
      }
      case 'Christmas': {
        const params = `inCategory/6`;
        return getProducts(params)
      }
      case 'Valentine\'s': {
        const params = `inCategory/7`;
        return getProducts(params)
      }
      default: {
        const params = `inCategory/1`;
        return getProducts(params)
      }
    }
  };
  render() {
    const { liItems, isLoading } = this.props;
    return <SideBarComponent
      onClickCategory={this.onClickCategory}
      isLoading={isLoading}
      liItems={liItems}
    />
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getProducts
  }, dispatch);

export default connect(null, mapDispatchToProps)(SideBar);
