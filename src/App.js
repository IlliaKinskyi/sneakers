import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Routes, Route, Link } from 'react-router-dom';
import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  React.useEffect(() => {
    axios.get('https://62d970bf9eedb699635c3307.mockapi.io/items')
      .then(res => {
        setItems(res.data)
      })
    axios.get('https://62d970bf9eedb699635c3307.mockapi.io/cart')
    .then(res => {
      setCartItems(res.data)
    })
    axios.get('https://62d970bf9eedb699635c3307.mockapi.io/favorites')
    .then(res => {
      setFavorites(res.data)
    })
  }, [])

  const onAddToFavirite = (obj) => {
    axios.post('https://62d970bf9eedb699635c3307.mockapi.io/favorites', obj)
    setFavorites(prev => [...prev, obj])
  }
  
  const onAddToCart = (obj) => {
    axios.post('https://62d970bf9eedb699635c3307.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62d970bf9eedb699635c3307.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)}/>

      <Routes>
        <Route path="/" element={<Home 
          items={items} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavirite={onAddToFavirite}
          onAddToCart={onAddToCart}
        />}/>
        <Route path="/favorites" element={<Favorites items={favorites}/>}/>
      </Routes>
      
       
    </div>
  );
}

export default App;
