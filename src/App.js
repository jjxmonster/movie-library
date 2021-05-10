import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { LandingPage, MoviesSection } from './containers';
import { MenuBar } from './components';

import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';
import GlobalStyles from './themes/GlobalStyles';

const App = () => {
   const client = new QueryClient({
      defaultOptions: {
         queries: {
            suspense: true,
         },
      },
   });
   return (
      <QueryClientProvider client={client}>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LandingPage>
               <Suspense fallback='loading...'>
                  <MenuBar />
               </Suspense>
               <MoviesSection></MoviesSection>
            </LandingPage>
         </ThemeProvider>
      </QueryClientProvider>
   );
};

export default App;
