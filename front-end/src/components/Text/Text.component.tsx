import { ReactElement } from 'react';

interface TextConfig {
  value?: string;
}

function Text(props: TextConfig): ReactElement {
  return (
    <span>{props.value}</span>
  );
};

export default Text;