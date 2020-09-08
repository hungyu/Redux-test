import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Counter } from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/counter"
            render={() => (
              <React.Fragment>
                <CounterApp />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

const CounterApp = () => {
  return (
    <div>
      <Counter />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </div>
  )
}


export default App;
