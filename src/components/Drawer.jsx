import React from 'react';

const Drawer = ({ onClose, onRemove, items = [] }) => {
    return (
      
    <div className="overlay">
        <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={onClose}/>
        </h2>

        <div className="items">
          
        {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20" id={obj.id}>
                <div style={{ backgroundImage: `url(${obj.image})`}} className="cartItemImg"></div>

                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} грн.</b>
                </div>
                <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
              </div>
            ))}

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
      </div>
    );
};

export default Drawer;