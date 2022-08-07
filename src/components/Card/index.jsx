import React from 'react';
import styles from './Card.module.scss'

const Card = ({ title, image, price, onFavorite, onPlus, favorited}) => {

    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({title, image, price})
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({title, image, price})
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={
                        isFavorite 
                        ? "/img/liked.svg"
                        : "/img/unliked.svg" 
                    }  alt="Liked"/>
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