import React, { Suspense, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { LandingPageContainer, MainSection } from './containers';
import { MenuBar, LoadingIndicator } from './components';
import { HomePage, MoviesPage } from './pages';

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
   }, [history]);
   return (
      <QueryClientProvider client={client}>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LandingPageContainer>
               <Suspense fallback={LoadingIndicator}>
                  <MenuBar />
               </Suspense>
               <MainSection>
                  <Switch>
                     <Route path='/genre/:name'>
                        <MoviesPage />
                     </Route>
                     <Route path='/home'>
                        <HomePage />
                     </Route>
                  </Switch>
               </MainSection>
            </LandingPageContainer>
         </ThemeProvider>
      </QueryClientProvider>
   );
};

export default App;
