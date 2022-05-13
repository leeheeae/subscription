import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//background
import Background from './components/common/Background';

//pages
import MainPage from './pages/MainPage';
import TodayPage from './pages/TodayPage';

const App = () => {
  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/today" element={<TodayPage />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
};

export default App;
