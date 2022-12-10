import React from "react";
import "./Header.css";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
            alt="logo netflix"
          />
        </a>
      </div>
      <div className="header--navLeft">
        <a href="/">Início</a>
        <a href="/">Séries</a>
        <a href="/">Filmes</a>
        <a href="/" className="hidden">Bombando</a>
        <a href="/" className="hidden">Minha Lista</a>
        <a href="/" className="hidden">Navegar por idioma</a>

      </div>
      <div className="header--navRight">
        <a href="/"><SearchIcon /> </a>
        <a href="/" className="hidden">Infantil</a>
        <a href="/"><NotificationsOutlinedIcon /></a>
        <div className="header--user">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="usuário netflix"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
