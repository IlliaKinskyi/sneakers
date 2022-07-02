import React from 'react';
import sneakersList from '../sneakersList';

console.log();




const card = () => {
    return (
        <div class="card mr-40">
            <img width={133} height={112} src={sneakersList[0].image} alt=""/>
            <h5>{sneakersList[0].title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{sneakersList[0].price}</b>
                </div>
                <button className="button">
                    <img width={11} height= {11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
};


export default card;