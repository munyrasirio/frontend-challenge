import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Structure from './components/Structure';
import MemberList from './pages/MemberList';
import Member from './pages/Member';
import useGlobalFilters from './hooks/useGlobalFilters.js';

function App() {
  const [filter, setFilter] = useGlobalFilters();

  return (
    <Router>
      <Structure onEnter={setFilter}>
        <Switch>
          <Route path="/member/:id" component={Member} />
          <Route path="/">
            <MemberList {...{filter, setFilter}}/>
          </Route>
        </Switch>
      </Structure>
    </Router>
  );
}

export default App;