import React from 'react';
import styled from 'styled-components';

const BackgroundBlock = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--color-03);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Background = ({ children }) => {
  return <BackgroundBlock>{children}</BackgroundBlock>;
};

export default Background;
