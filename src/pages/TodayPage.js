import React from 'react';

import styled from 'styled-components';

//components
import Responsive from '../components/common/Responsive';
import TodayItemsContainer from '../containers/TodayItemsContainer';

//styled
const TodayPageBlock = styled(Responsive)`
  padding: 5rem 0;
`;

//오늘의 청약 일정 페이지
const TodayPage = () => {
  return (
    <TodayPageBlock>
      <TodayItemsContainer />
    </TodayPageBlock>
  );
};

export default TodayPage;
