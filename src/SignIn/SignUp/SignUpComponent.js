import * as React from 'react';
import ButtonItem from "../ButtonItem";
import {TextFields} from "../TextFields";

interface Props {
  field: Object,
  onClick(): void,
  onChange(): void
}

export const SignUpComponent = (props: Props) => {
  const { field, onClick, onChange} = props;
  const signInField = field.map((item, index) => {
    return <TextFields
      key={index}
      TextField={item}
      onChange={onChange}
    />
  });

  return(
    <main>
      <div className='main__signUp'>
        { signInField }
        <ButtonItem
          onClick={onClick}
          value='Join us!'
        />
      </div>
    </main>
  )
};
