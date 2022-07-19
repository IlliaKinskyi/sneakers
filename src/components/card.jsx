import React from 'react';

const Card = (props) => {
    return (
        <div className="card mr-40">
            <div className="favorite">
                <img src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={props.image} alt=""/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} грн.</b>
                </div>
                <button className="button">
                    <img width={11} height= {11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
};


export default Card;