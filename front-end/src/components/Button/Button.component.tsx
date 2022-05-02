import { ReactElement } from 'react';
import styles from './Button.module.scss';

interface PropsConfig {
  children: string | JSX.Element | JSX.Element[];
  type: string;
  onClick: () => void;
}

function Button({ children }: PropsConfig): ReactElement {
  return (
    <button className={styles.wrapperButton}>
      {children}
    </button>
  );
};

export default Button;