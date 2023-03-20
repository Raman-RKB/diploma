// import React, { useContext } from 'react';
import Main from './components/mainNotReg';
// import Player from './components/Player';
// import { ThemeContext } from '../../ThemeContext';

import { Wrapper, GlobalStyle } from './css/globalStyle';

function MainScreen() {
  // const { theme } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Main />
      </Wrapper>
    </>
  );
}

export default MainScreen;
