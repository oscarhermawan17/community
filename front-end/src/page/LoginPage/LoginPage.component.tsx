import { useState, ReactElement } from 'react';
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../app/store';

import Form from '../../components/Form';
import Button from '../../components/Button';
import styles from './LoginPage.module.scss';

function LoginPage(): ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <>
      <div className={styles.wrapperLoginPage}>
        <div className={styles.wrapperBox}>
          <div className={styles.formBox}>
            <span>email</span>
            <Form value={email} type={'text'} onChange={(value) => setEmail(value)} />
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