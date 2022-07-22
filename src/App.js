import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import React from "react";
import axios from "axios";

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    axios.get('https://62d970bf9eedb699635c3307.mockapi.io/items')
      .then(res => {
        setItems(res.data)
      })
    axios.get('https://62d970bf9eedb699635c3307.mockapi.io/cart')
    .then(res => {
      setCartItems(res.data)
    })
  }, [])


  const [cartItems, setCartItems] = React.useState([])
  
  const onAddToCart = (obj) => {
    axios.post('https://62d970bf9eedb699635c3307.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62d970bf9eedb699635c3307.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const [cartOpened, setCartOpened] = React.useState(false)
  
  const [searchValue, setSearchValue] = React.useState('')

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      
       <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue 
          ? `Поиск по запросу: "${searchValue}"` 
          : 'Все кроссовки'
          }</h1>
          <div className="search-block d-flex">
            {searchValue && 
            <img 
              onClick={() => setSearchValue('')} 
              className="clear cu-p" 
              src="/img/btn-remove.svg" alt="Clear" 
            />}
            <img src="/img/search.svg" alt="Search"/>
            <input 
              onChange={onChangeSearchInput} 
              value={searchValue} 
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item) => (
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
