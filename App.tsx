import React from 'react';
import Router from './src/Router';
import {Provider} from 'mobx-react';
import stores from './src/Score';

export default function App() {
  return (
    <Provider {...stores}>
      <Router />
    </Provider>
  );
}
