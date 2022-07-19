import React from 'react';

const Drawer = () => {
    return (
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/>
        </h2>

        <div className="items">
          
        <div className="cartItem d-flex align-center mb-20">
          <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>4999 грн.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
        </div>

        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>9998 грн.</b>
            </li>
            <li>
              <span>НДС 20%</span>
              <div></div>
              <b>2000 грн.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/> </button>
        </div>
      </div>
    );
};

export default Drawer;