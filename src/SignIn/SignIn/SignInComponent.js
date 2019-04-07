import * as React from 'react';
import ButtonItem from "../ButtonItem";
import {TextFields} from "../TextFields";

interface Props {
  field: Object,
  onClick(): void
}

const SiginInComponent = (props: Props) => {
  const {field, onClick, onChange} = props;
  const SignInField = field.map((item, index) => {
    return(
      <TextFields
        key={index}
        TextField={item}
        onChange={e => onChange(e)}
      />
    )
  });
  return(
    <main>
      <div className='main__signIn'>
        { SignInField }
        <ButtonItem
          value='Sign In'
          onClick={onClick}
        />
      </div>
    </main>
  )
};

export default SiginInComponent;
