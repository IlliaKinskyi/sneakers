import React from 'react'
import AppContext from '../context'

const Info = ({ imageInfo, title, description }) => {
    const { setCartOpened } = React.useContext(AppContext)

  return (
    <div className="cart-empty d-flex align-center justify-center     flex-column flex">
        <img className="mb-20" width="120px" src={imageInfo} alt="Cart Empty" />
        <h3>{title}</h3>
        <p className="opacity-6">{description}</p>
        <button className="greenButton" onClick={() => setCartOpened(false)}>
            <img src="/img/arrow-back.svg" alt="Arrow"/> Вернуться назад
        </button>
    </div>
  )
}

export default Info
