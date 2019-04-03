// @flow
import * as React from 'react';
import './SignIn.css';

import { TextFields } from '../TextFields';
import ButtonItem from '../ButtonItem';


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


  render() {
    const {
      TextField
    } = this.state;

    const SignInField = TextField.map(item => {
      return(
        <TextFields
          TextField={item}
          onChange={this.onChangeField}
        />
      )
    });

    return(
      <main>
        <div className='main__signIn'>
          { SignInField }
          <ButtonItem value='Sign In' />
        </div>
      </main>
    )
  }
}

export default SignIn;
