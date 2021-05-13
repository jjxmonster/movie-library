import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import configureStore from './data/store/store';

import { LandingPageContainer, MainSection } from './containers';
import { MenuBar, LoadingIndicator } from './components';
import { HomePage, MoviesPage } from './pages';

import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';
import GlobalStyles from './themes/GlobalStyles';

const store = configureStore();
const client = new QueryClient({
   defaultOptions: {
      queries: {
         suspense: true,
         refetchOnWindowFocus: false,
      },
   },
});

const App = () => {
   const history = useHistory();
   const [activeGenre, setActiveGenre] = useState();

   const getActiveGenre = genre => {
      setActiveGenre(genre);
   };

   useEffect(() => {
      history.push('/home');
   }, [history]);

   return (
      <Provider store={store}>
         <QueryClientProvider client={client}>
            <ThemeProvider theme={theme}>
               <GlobalStyles />
               <LandingPageContainer>
                  <Suspense fallback={LoadingIndicator}>
                     <MenuBar activeGenre={activeGenre} />
                  </Suspense>
                  <MainSection>
                     <Switch>
                        <Route path='/genre/:id/:name'>
                           <MoviesPage getActiveGenre={getActiveGenre} />
                        </Route>
                        <Route path='/movie/:id'>
                           <HomePage />
                        </Route>
                        <Route path='/home'>
                           <HomePage />
                        </Route>
                     </Switch>
                  </MainSection>
               </LandingPageContainer>
            </ThemeProvider>
         </QueryClientProvider>
      </Provider>
   );
};

export default App;
