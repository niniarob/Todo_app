import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    // background-color:#E4E4E4;
    background: #F8F8F8;
  }
`;

export const GlobalStylesComponent: React.FC = () => {
  return <GlobalStyles />;
};
