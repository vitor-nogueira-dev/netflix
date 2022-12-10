import PropTypes from "prop-types";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import "./Footer.css";

class RedesSociais extends React.Component {
  render() {
    const { redesSociais } = this.props;
    const { linkedin, email, gitHub } = redesSociais;
    return (
      <section className="section-redesSociais">
        <section className="redesSociais">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon style={{color: 'white'}} />
          </a>

          <a href={gitHub} target="_blank" rel="noreferrer">
            <GitHubIcon style={{color: 'white'}} />
          </a>

          <p className="fonte">
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
            > 🔗 The Moviedb
            </a>
          </p>
          <p className="netflix">
            Todos os direitos reservados a
            <a
              href="https://www.netflix.com/pt-br/"
              target="_blank"
              rel="noreferrer"
            > 🔗 Netflix
            </a>
          </p>
        </section>
      </section>
    );
  }
}

RedesSociais.propTypes = {
  redesSociais: PropTypes.shape({
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    email: PropTypes.string,
    gitHub: PropTypes.string,
  }).isRequired,
}.isRequired;

export default RedesSociais;
