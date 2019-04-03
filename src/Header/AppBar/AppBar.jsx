//@flow
import React, { Component } from 'react';
import AppBarComponent from './AppBarComponent';



type State = {
  sticky: boolean
}

class AppBar extends Component<null, State> {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  };
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  };

  handleScroll = () => {
    const height = document.querySelector('.header__appbar').clientHeight;
    let scrollY = window.scrollY;
    if(scrollY > height) this.setState({ sticky: true });
    else this.setState({ sticky: false });
  };
  render() {
    const { sticky } = this.state;
    return <AppBarComponent
      sticky={sticky}
    />
  }
}


export default AppBar;
