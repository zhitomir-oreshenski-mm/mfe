import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

console.log('marketing!')

// mount function

const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  )
}

// if we are in development and in isolation, then call mount immediately
// else we run it in container and should export the mount function

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }


