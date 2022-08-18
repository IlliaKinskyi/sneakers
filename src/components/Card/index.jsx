import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './Card.module.scss'
import AppContext from '../../context';

const Card = ({ 
    id, 
    title, 
    image, 
    price, 
    onFavorite, 
    onPlus, 
    favorited = false,
    loading = false
}) => {

    const { isItemAdded } = React.useContext(AppContext)
    const [isFavorite, setIsFavorite] = React.useState(favorited)
    const obj = {title, image, price, id, parrentId: id}

    const onClickPlus = () => {
        onPlus(obj)
    }

    const onClickFavorite = () => {
        onFavorite(obj)
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            {
                loading ?  <ContentLoader 
                speed={2}
                width={150}
                height={195}
                viewBox="0 0 150 195"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                <rect x="0" y="110" rx="5" ry="5" width="150" height="15" /> 
                <rect x="0" y="135" rx="5" ry="5" width="100" height="15" /> 
                <rect x="0" y="170" rx="5" ry="5" width="80" height="25" /> 
                <rect x="118" y="163" rx="5" ry="5" width="32" height="32" />
              </ContentLoader>
              : <>
            {onFavorite && <div className={styles.favorite} onClick={onClickFavorite}>
                    <img src={
                            isFavorite 
                            ? "/img/liked.svg"
                            : "/img/unliked.svg" 
                        }  alt="Liked"/>
            </div>}
                <img width='100%' height={135} src={image} alt=""/>
                <h5>{title}</h5>
                <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} грн.</b>
                </div>
               {onPlus && <img 
                    className={styles.plus} 
                    onClick={onClickPlus}
                    src={
                        isItemAdded(id) 
                        ? "/img/btn-checked.svg"
                        : "/img/btn-plus.svg" 
                    } 
                    alt="Plus" 
                />}
                </div>
                </>
            }
            
        </div>
    );
};


export default Card;