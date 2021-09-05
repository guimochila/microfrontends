import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

function App() {
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <hr />
          <MarketingApp />
        </div>
      </StylesProvider>
    </Router>
  );
}

export default App;
