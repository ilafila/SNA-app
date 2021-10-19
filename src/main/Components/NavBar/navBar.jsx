import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './navBar.css';
import { BiAddToQueue } from 'react-icons/bi';
import { CgLoadbarDoc } from 'react-icons/cg';
import { VscSettingsGear } from 'react-icons/vsc';
import { GiExitDoor } from 'react-icons/gi';
import Logo from './img/logo-min.png';
import NavBarImage from './img/navBarImg-min.png';

function NavBar() {
  return (
    <div className="navigation">
      <div className="navigation__logo-container">
        <img className="logo" src={Logo} alt="logo" />
        <p className="logo-text">Metrics</p>
      </div>
      <div className="navigation__links-container">
        <div className="links-container__link-container">
          <BiAddToQueue className="link-icon" />
          <Link className="link" to="/add">Добавить кейс</Link>
        </div>
        <div className="links-container__link-container">
          <CgLoadbarDoc className="link-icon" />
          <Link className="link" to="/cases">Просмотреть кейсы</Link>
        </div>
        <div className="links-container__link-container">
          <VscSettingsGear className="link-icon" />
          <Link className="link" to="/cases">Настройки</Link>
        </div>
        <div className="links-container__link-container">
          <GiExitDoor className="link-icon" />
          <Link className="link" to="/cases">Выйти</Link>
        </div>
      </div>
      <div className="nav-bar-img-container">
        <img className="nav-bar-img" src={NavBarImage} alt="navBarImage" />
      </div>
    </div>
  );
}

export default NavBar;
