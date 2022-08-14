import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="d-flex justify-between align-center p-40 ">
        <Link to="/">
          <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt=""/>
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <ul className="d-flex">
          <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={20} height={15} src="/img/cart.svg" alt="Корзина"/>
            <span>1205 грн.</span>
          </li>
          <li>
            <Link to="/favorites">
              <img className="mr-20 cu-p" width={20} height={20} src="/img/heart.svg" alt="Закладки"/>
            </Link>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" alt="Пользователь"/>
          </li>
        </ul>
      </header>
    );
};

export default Header;