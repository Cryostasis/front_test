import React from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import Root from './root';

function render(Component) {
  ReactDOM.render(
    <Root content={ Component }/>,
    document.getElementById('root'),
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

render(App);

registerServiceWorker();
