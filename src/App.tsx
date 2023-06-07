import { FC } from 'react';
import { GlobalStyle } from 'components/common/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from 'routers/Main';

const RouterContainer: FC = () => {
  return (
      <Router>
        <Main />
      </Router>
  )
} 

const App: FC = () => {
  return (
    <>
      <GlobalStyle/>
      <RouterContainer />
    </>
  );
}

export default App;
