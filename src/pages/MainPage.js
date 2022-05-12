import React from 'react';

import styled from 'styled-components';

//components
import Shortcut from '../components/main/Shortcut';
import Responsive from '../components/common/Responsive';

//styled
const MainPageBlock = styled(Responsive)`
  min-height: 100vh;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainPage = () => {
  return (
    <MainPageBlock>
      {/* <h1>청약 확인하기</h1> */}
      <Shortcut />
    </MainPageBlock>
  );
};

export default MainPage;
