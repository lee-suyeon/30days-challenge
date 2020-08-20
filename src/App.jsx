import React from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from './theme/globalStyles';
import Theme from './theme/theme';
import Template from './Components/Template/Template';
import MainPage from './Components/MainPage/MainPage';
import ChallengePage from './Components/ChallengePage/ChallengePage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Template>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/challenge" component={ChallengePage} />
        </Template>
      </Theme>
    </>
  );
}

export default App;
