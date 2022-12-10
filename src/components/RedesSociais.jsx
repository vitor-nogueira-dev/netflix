import PropTypes from "prop-types";
import React from "react";
import LogoLinkedin from "./imagens/linkedin.png";
import LogoGitHub from "./imagens/github.png";
import "./Footer.css";

class RedesSociais extends React.Component {
  render() {
    const { redesSociais } = this.props;
    const { linkedin, email, gitHub } = redesSociais;
    return (
      <section className="section-redesSociais">
        <section className="redesSociais">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img src={LogoLinkedin} alt="Logo instagram" />
          </a>

          <a href={gitHub} target="_blank" rel="noreferrer">
            <img src={LogoGitHub} alt="Logo instagram" />
          </a>

          <p className="contato">
            📧
            {email}
          </p>
          <p className="fonte">
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
            >
              🔗Fonte
            </a>
          </p>
          <p className="netflix">
            Direitos reservados a
            <a
              href="https://www.netflix.com/pt-br/"
              target="_blank"
              rel="noreferrer"
            > 🔗Netflix
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
