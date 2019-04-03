//@flow
import * as React from 'react';
import SideBarComponent from './SideBarComponent';
import Item from '../../redux/reducers/getParamsCategories';
import './SideBar.css';

import { connect } from 'react-redux';
import { paramsProductsActions } from '../../redux/actions/paramsProductsActions';
import { bindActionCreators } from 'redux';

type Props = {
  liItems: Item[],
  isLoading: boolean,
  paramsProductsActions(): void
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
    const { paramsProductsActions } = this.props;
    switch (e.target.classList.value) {
      case 'French': {
        const params = `inCategory/1`;
        return paramsProductsActions(params)
      }
      case 'Irish': {
        const params = `inCategory/3`;
        return paramsProductsActions(params)
      }
      case 'Italian': {
        const params = `inCategory/2`;
        return paramsProductsActions(params)
      }
      case 'Animal': {
        const params = `inCategory/4`;
        return paramsProductsActions(params)
      }
      case 'Flower': {
        const params = `inCategory/5`;
        return paramsProductsActions(params)
      }
      case 'Christmas': {
        const params = `inCategory/6`;
        return paramsProductsActions(params)
      }
      case 'Valentine\'s': {
        const params = `inCategory/7`;
        return paramsProductsActions(params)
      }
      default: {
        const params = `inCategory/1`;
        return paramsProductsActions(params)
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
    paramsProductsActions
  }, dispatch);

export default connect(null, mapDispatchToProps)(SideBar);
