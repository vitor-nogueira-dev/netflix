import React from "react";
import "./Header.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
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
        <div>Início</div>
        <div>Séries</div>
        <div>Filmes</div>
        <div>Bombando</div>
        <div>Minha Lista</div>
        <div>Navegar por idiomas</div>
      </div>
      <div className="header--navRight">
        <div><SearchIcon /> </div>
        <div>Infantil</div>
        <div><NotificationsIcon /></div>
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
