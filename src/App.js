import React from 'react';

import { LandingPage } from './containers';
import { MenuBar } from './components';

import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';
import GlobalStyles from './themes/GlobalStyles';

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <LandingPage>
            <MenuBar />
         </LandingPage>
      </ThemeProvider>
   );
};

export default App;
