import React from 'react';
import styles from './Card.module.scss'

const Card = ({ title, image, price, onFavorite, onPlus}) => {

    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
        onPlus({title, image, price})
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked"  onClick={onFavorite}/>
            </div>
            <img width={133} height={112} src={image} alt=""/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} грн.</b>
                </div>
                    <img 
                    className={styles.plus} 
                    src={
                        isAdded 
                        ? "/img/btn-checked.svg"
                        : "/img/btn-plus.svg" 
                    } 
                    alt="Plus" 
                    onClick={onClickPlus}/>
            </div>
        </div>
    );
};


export default Card;