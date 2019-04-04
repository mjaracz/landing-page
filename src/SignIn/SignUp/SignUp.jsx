// @flow
import * as React from 'react';
import './SignUp.css';

import { bindActionCreators } from 'redux';
import { postRegistrations } from '../../redux/actions/postRegistrations';
import { connect } from 'react-redux';
import { TextFields } from '../TextFields';
import ButtonItem from "../ButtonItem";

interface State {
  email: string,
  password: string,
  TextField: {
    name: string,
    type: string,
    autoComplete: string
  }[]
}

class SignUp extends React.Component<null, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      TextField: [
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
  componentDidMount() {

  };
  onChangeField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  onClick = () => {
    this.props.postRegistrations()
  };
  render() {
    const { TextField } = this.state;
    const signInField = TextField.map(item => {
      return <TextFields
        TextField={item}
        onChange={this.onChangeField}
      />
    });
    return(
      <main>
        <div className='main__signUp'>
          { signInField }
          <ButtonItem
            onClick={}
            value='Join us!'
          />
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.products.isLoading,
  products: state.products.paramData,
  error: state.products.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    postRegistrations
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
