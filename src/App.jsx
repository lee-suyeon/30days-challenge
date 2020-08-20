import React from 'react';
import { Route } from 'react-router-dom';
import Theme from './theme/theme';
import MainPage from './Components/MainPage/MainPage';
import GlobalStyle from './theme/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Route exact path="/" component={MainPage} />
      </Theme>
    </>
  );
}

export default App;
