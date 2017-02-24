import React from 'react';
import { Provider } from 'react-redux';
import initStore from 'store';
import { Icon } from 'react-lightning-design-system';
import configure from 'lightning-configuration';

configure();

const store = initStore();

/*
  This is a simple wrapper around the application which defines elements common
  to the application.
*/
const App = () => {
  return (
    <Provider store={ store }>
      <div>
        <Icon container="circle" category="custom" icon="custom1" />
      </div>
    </Provider>
  );
};

export default App;
