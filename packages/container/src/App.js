import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <MarketingApp />
      </div>
    </Router>
  );
}

export default App;
