import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//background
import Background from './components/common/Background';

//pages
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
};

export default App;
