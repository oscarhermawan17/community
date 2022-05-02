import { ReactElement } from 'react';
import Home from './page/Home';
import LoginPage from './page/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
