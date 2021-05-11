import React, { Suspense, useEffect } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { LandingPage, MoviesSection } from './containers';
import { MenuBar, HomePage } from './components';

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
   const history = useHistory();

   useEffect(() => {
      history.push('/home');
   });
   return (
      <QueryClientProvider client={client}>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LandingPage>
               <Suspense fallback='loading...'>
                  <MenuBar />
               </Suspense>
               <MoviesSection>
                  <Switch>
                     <Route path='/home'>
                        <HomePage />
                     </Route>
                  </Switch>
               </MoviesSection>
            </LandingPage>
         </ThemeProvider>
      </QueryClientProvider>
   );
};

export default App;
