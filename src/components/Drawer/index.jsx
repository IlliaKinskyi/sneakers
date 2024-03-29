import React from 'react';
import axios from "axios";

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Drawer = ({ onClose, onRemove, items = [], opened }) => {
  const { cartItems, setCartItems, totalPrice } = useCart()
  const [orderId, setOrderId] = React.useState(null)
  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const onClickOrder = async () => {
  try {
    setIsLoading(true)
    const {data} = await axios.post('https://62d970bf9eedb699635c3307.mockapi.io/orders', {
      items: cartItems
    })

    
    setOrderId(data.id)
    setIsOrderComplete(true)
    setCartItems([])

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i]
      await axios.delete('https://62d970bf9eedb699635c3307.mockapi.io/cart/' + item.id)
      await delay(1000)
    }
    
    } catch (error) {
      alert('Ошибка при создании заказа :(')
    }
    setIsLoading(false)
    }

    return ( 
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
        <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={onClose}/>
        </h2>

        {
          items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                  <div key={obj.id} className="cartItem d-flex align-center mb-20" id={obj.id}>
                    <div style={{ backgroundImage: `url(${obj.image})`}} className="cartItemImg"></div>

                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} грн.</b>
                    </div>
                    <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                  </div>
              ))}
              <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} грн.</b>
                </li>
                <li>
                  <span>НДС 20%</span>
                  <div></div>
                  <b>{Math.ceil(totalPrice * 0.2)} грн.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/> </button>
            </div>
            </div>
            </div>)

          : 
          <Info 
            title= {isOrderComplete ? "Заказ оформлен!" : "Корзина пуста" }
            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ." }
            imageInfo={isOrderComplete ? "/img/complete-order.svg" : "/img/cart-empty.svg"}
          />
        }

      </div>
      </div>
    );
};

export default Drawer;