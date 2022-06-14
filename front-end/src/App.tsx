import { ReactElement } from 'react';
import { Provider } from 'react-redux'

import store from './app/store';
import Home from './page/Home';
import LoginPage from './page/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(): ReactElement {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
