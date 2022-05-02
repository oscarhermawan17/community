import { useState, ReactElement } from 'react';

import Form from '../../components/Form';
import Button from '../../components/Button';
import styles from './LoginPage.module.scss';

function LoginPage(): ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <div className={styles.wrapperLoginPage}>
        <div className={styles.wrapperBox}>
          <div className={styles.formBox}>
            <span>username</span>
            <Form value={username} type={'text'} onChange={(value) => setUsername(value)} />
          </div>
          <div className={styles.formBox}>
            <span>password</span>
            <Form value={password} type={'password'} onChange={(value) => setPassword(value)} />
          </div>
          <div className={styles.wrapperButton}>
            <Button type="button" onClick={() => console.log('oke')}>Login</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;