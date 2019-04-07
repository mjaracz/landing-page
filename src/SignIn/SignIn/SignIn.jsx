// @flow
import * as React from 'react';
import './SignIn.css';

import  {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchLogin} from '../../redux/actions/loginUser';

import SignInComponent from "./SignInComponent";

interface State {
  email: string,
  password: string,
  TextField: {
    name: string,
    type: string,
    autoComplete: string
  }[]
}

class SignIn extends React.Component<null, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      TextField: [
        {
          name: 'email',
          type: 'email',
          autoComplete: 'current-email'
        },
        {
          name: 'password',
          type: 'password',
          autoComplete: 'current-password'
        }
      ]
    }
  }
  onChangeField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  onClick = () => {
    const credentials = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.fetchLogin(credentials)
  };
  render() {
    const {TextField} = this.state;
    return <SignInComponent
      field={TextField}
      onClick={this.onClick}
      onChange={this.onChangeField}
    />
  }
}

const mapStateToProps = (state) => ({
  user: state.user.login,
  error: state.user.error,
  loading: state.user.loadingLogin
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchLogin
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
