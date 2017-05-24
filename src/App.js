import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import testApp from './redux/reducers'

import './App.css';
import AccountContainer from './Account/AccountContainer';

const store = createStore(testApp)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AccountContainer />
      </Provider>
    );
  }
}


export default App;
