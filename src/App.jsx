import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import GlobalStyle from './theme/globalStyles';
import Theme from './theme/theme';
import Template from './Components/Template/Template';
import MainPage from './Components/MainPage/MainPage';
import ChallengePage from './Components/ChallengePage/ChallengePage';
import Modal from './Components/commons/Modal';

function App() {
  const challenge = useSelector((state) => state.challenge);

  return (
    <>
      <GlobalStyle />
      <Theme>
        <Template>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/challenge" component={ChallengePage} />
          {challenge.modal && <Modal />}
        </Template>
      </Theme>
    </>
  );
}

export default App;
