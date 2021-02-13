import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <Detail path="products/:id" />
		<Update path="products/:id/edit"/>
      </Router>
    </div>
  );
}
export default App;
