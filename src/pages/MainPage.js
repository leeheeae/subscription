import React from 'react';

import styled from 'styled-components';

//components
import Shortcut from '../components/main/Shortcut';
import Responsive from '../components/common/Responsive';

//styled
const MainPageBlock = styled(Responsive)`
  padding: 5rem 0;
`;

const TitleBox = styled.div`
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--color-01);
`;

const MainPage = () => {
  return (
    <MainPageBlock>
      <TitleBox>
        <h1>청약 분양정보 조회 서비스</h1>
      </TitleBox>
      <Shortcut />
    </MainPageBlock>
  );
};

export default MainPage;
