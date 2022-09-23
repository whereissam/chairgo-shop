import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  //Wrap ChakraProvider at the root of your app
  <ChakraProvider>
    <ColorModeScript />
    <App />
  </ChakraProvider>
);

serviceWorker.unregister();


