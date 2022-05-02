import { ReactElement } from 'react';
import { checkCharEmail, checkCharPassword } from '../../utils/regex'

interface Props {
  type: string;
  value: string;
  onChange: (value: string) => void;
  // onChange: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
}

const handleChange = (value: string, type: string, onChange: (a: string) => void ): void => {
  switch(type) {
    case 'password':
      if(checkCharPassword(value)) {
        onChange(value);
      }
      break;
    default:
      if(checkCharEmail(value)) {
        onChange(value);
      }
  }
}

function Form({ value, type, onChange }: Props): ReactElement {

  return (
    <input value={value} type={type} onChange={(e) => handleChange(e.target.value, type, onChange)} />
  );
};

export default Form;
