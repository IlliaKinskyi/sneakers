import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://62d970bf9eedb699635c3307.mockapi.io/items')
  .then(res => {
    return res.json()
  })
  .then(json => {
    setItems(json)
  })
  }, [])


  const [cartItems, setCartItems] = React.useState([])
  
  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      
       <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>

          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card 
              title={item.title} 
              price={item.price} 
              image={item.image}
              key={item.id}
              onFavorite={() => console.log('Click Favorite')}
              onPlus={(obj) => onAddToCart(obj)}
            />
            ))}
        </div>

       </div>
    </div>
  );
}

export default App;
