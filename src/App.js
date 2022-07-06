import Card from "./components/card";
import sneakersList from "./sneakersList";

function App() {
  return (
    <div className="wrapper clear">

    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30">Корзина</h2>

        <div className="items">
        <div className="cartItem d-flex align-center mb-20">
          <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
            <b>4999 грн.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
        </div>

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
    </div>

      <header className="d-flex justify-between align-center p-40 ">
        <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt=""/>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={20} height={15} src="/img/cart.svg" alt=""/>
            <span>1205 грн.</span>
          </li>
          <li>
          <img width={20} height={20} src="/img/user.svg" alt=""/>
          </li>
        </ul>
      </header>
       <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>

          </div>
        </div>

        <div className="d-flex">
        <Card item={sneakersList[0]}/>
        <Card item={sneakersList[1]}/>
        <Card item={sneakersList[2]}/>
        <Card item={sneakersList[3]}/>
        <Card item={sneakersList[4]}/>
        <Card item={sneakersList[5]}/>
        <Card item={sneakersList[6]}/>
        <Card item={sneakersList[7]}/>
        <Card item={sneakersList[8]}/>
        <Card item={sneakersList[9]}/>
        <Card item={sneakersList[10]}/>
        <Card item={sneakersList[11]}/>
        </div>

       </div>
    </div>
  );
}

export default App;
