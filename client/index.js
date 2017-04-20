import React from 'react';
import Relay from 'react-relay';
import { RelayNetworkLayer, authMiddleware } from 'react-relay-network-layer';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import '../node_modules/react-mdl/extra/material';
import Root from './root';
import hasValidJwtToken from './modules/users/JwtUtils';


Relay.injectNetworkLayer(new RelayNetworkLayer([
  authMiddleware({
    token: () => hasValidJwtToken(),
    allowEmptyToken: true
  })
]));

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);


const render = (Component) => {
  ReactDOM.render(
    <AppContainer >
      <Component />
    </AppContainer>,
    rootNode
  );
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./root', () => {
    render(Root);
  });
}