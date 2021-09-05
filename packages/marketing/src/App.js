import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

function App() {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}

export default App;
