import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import store, { history, rehydrate } from './services/store';


class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    rehydrate(store, { whitelist: ['auth'] }, () => {
      this.setState({ rehydrated: true })
    })
  }
  render() {
    var Component = this.props.content;
    // if(!this.state.rehydrated){
    //   return (<span></span> )
    // }
    return (
      <Provider store={store}>
        <Router history={history}>
          <Component />
        </Router>
      </Provider>
    );
  }
}

export default Root;