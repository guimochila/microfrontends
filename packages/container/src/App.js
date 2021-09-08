import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';
const MarketingApp = React.lazy(() => import('./components/MarketingApp'));
const AuthApp = React.lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

function App() {
  const [isSignIn, setIsSignIn] = React.useState(false);

  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignIn={isSignIn} onSignOut={() => setIsSignIn(false)} />
          <React.Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthApp onSignIn={() => setIsSignIn(true)} />
              </Route>
              <Route path="/" component={MarketingApp} />
            </Switch>
          </React.Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
}

export default App;
