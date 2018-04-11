import React from 'react';

import Game from '../Game';

import './styles.scss';

class Landing extends React.Component {
  render() {
    return (
      <div className="Landing">
				<div className='LandingHeader'>HEADER</div>
				<Game />
      </div>
    );
  }
}

export default Landing;
