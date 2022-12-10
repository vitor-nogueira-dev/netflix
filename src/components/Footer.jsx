import React from 'react';
import RedesSociais from './RedesSociais';
import './Footer.css';

const redesSociais = {
  linkedin: 'https://www.linkedin.com/in/vitor-noqueira-913a9284/',
  email: 'vleonel96@gmail.com',
  gitHub: 'https://github.com/vitor-nogueira96',
};

class Footer extends React.Component {
  render() {
    return (
      <RedesSociais redesSociais={ redesSociais } />
    );
  }
}

export default Footer;
