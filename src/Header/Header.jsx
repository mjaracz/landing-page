//@flow
import React, { Component } from 'react';
import AppBar from './AppBar/AppBar';
import SignInBar from './SignInBar/SignInBar';
import Pagination from './Pagination/Pagination';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts} from '../redux/actions/getProducts';
import {getCategories} from "../redux/actions/getCategories";
import  SideBarContainer  from './SideBar/SideBar';

import Item from '../redux/reducers/getCategories';

type Props = {
  sidebar: Item[],
  isLoading: boolean,
  errorMessage: string,
  getProducts(): void
}

type State = {
  pageNumber: number
}

class Header extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
      signInClick: false
    }
  }
  static getDerivedStateFromProps() {
    let state;
    const routeValue = window.location.pathname;

    let registry = (routeValue === '/signUp');
    let signIn = (routeValue === '/signIn' );

    state = (registry || signIn)
      ? {signInClick: true}
      : {signInClick: false};
    return state
  };
  componentDidMount() {
    this.props.getCategories('/1');
  }
  onClickArrow = (arrowDirection) => {
    const { pageNumber } = this.state;
    const { getProducts } = this.props;
    let newPage;

    const noTooBig = (pageNumber > 0 && pageNumber <= 3);
    if(noTooBig) {
      const params = `?page=${pageNumber}&limit=10`;
      getProducts(params);
    }
    if(arrowDirection) {
      newPage = pageNumber + 1;
      if(newPage > 3) newPage = 1;
    }
    if(!arrowDirection) {
      newPage = pageNumber - 1;
      if(newPage <= 0) newPage = 3;
    }
    this.setState({ pageNumber: newPage })
  };
  onClickNumber = (nr) => {
    const { pageNumber } = this.state;
    const { getProducts } = this.props;
    this.setState({pageNumber: nr});
    const params = `?page=${pageNumber}&limit=10`;
    getProducts(params);
  };
  onClickSignIn = () => {
    this.setState({ signInClick: true })
  };
  render() {
    const { signInClick } = this.state;
    const { categories, isLoading } = this.props;
    return(
      <header className='header'>
        <SignInBar onClickSignIn={this.onClickSignIn}/>
        <AppBar />
        <div className='header__container'>
          {
            !signInClick
              ? <SideBarContainer
                liItems={categories}
                isLoading={isLoading}
              />
              : null
          }
        </div>
        {
          !signInClick
            ? <Pagination
                onClickArrow={this.onClickArrow}
                onClickNumber={this.onClickNumber}
                signInClic={this.state.signInClick}
              />
            : null
        }
      </header>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.rows,
  isLoading: state.categories.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getProducts,
    getCategories
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
