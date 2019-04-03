// @flow
import * as React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

type Props = {
  onClickSignIn(): void
}

const SignInBar = (props: Props) => {
  return(
    <div className="header__signInBar">
      <div className="signInBar__item">
        <Link to='/signIn' onClick={props.onClickSignIn}>Sign In</Link> or <Link to='/signUp' onClick={props.onClickSignIn}>Register</Link>
      </div>
    </div>
  )
};

export default SignInBar;
