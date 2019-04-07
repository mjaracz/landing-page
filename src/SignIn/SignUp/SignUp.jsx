// @flow
import * as React from 'react';
import './SignUp.css';

import {bindActionCreators} from 'redux';
import {registrationsUser} from '../../redux/actions/registrationsUser';
import {connect} from 'react-redux';
import {SignUpComponent} from "./SignUpComponent";

interface State {
  name: string,
  email: string,
  password: string,
  textField: {
    name: string,
    type: string,
    autoComplete: string
  }[]
}

class SignUp extends React.Component<null, State> {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      textField: [
        {
          name: 'name',
          type: 'name',
          autoComplete: 'current-name'
        },
        {
          name: 'email',
          type: 'email',
          autoComplete: 'current-email'
        },
        {
          name: 're-email',
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    debugger;
    this.props.registrationsUser(credentials)
  };
  render() {
    const { textField } = this.state;
    return <SignUpComponent
      field={textField}
      onClick={this.onClick}
      onChange={this.onChangeField}
    />
  }
}

const mapStateToProps = (state) => ({
  user: state.user.registrations,
  isLoading: state.user.loadingSignUp,
  error: state.user.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    registrationsUser
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
