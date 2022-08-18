import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([axios.get('https://62d970bf9eedb699635c3307.mockapi.io/cart'), axios.get('https://62d970bf9eedb699635c3307.mockapi.io/favorites'), axios.get('https://62d970bf9eedb699635c3307.mockapi.io/items')])

        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        alert('Ошибка при запросе данных')
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://62d970bf9eedb699635c3307.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://62d970bf9eedb699635c3307.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
        }
    } catch (error) {
      alert('Не удалось добавить в закладки')
      console.erroe(error)
    }
  }
  
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => Number(item.parrentId) === Number(obj.id))
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parrentId) !== Number(obj.id)))
        await axios.delete(`https://62d970bf9eedb699635c3307.mockapi.io/cart/${findItem.id}`)
      
    } else {
      setCartItems(prev => [...prev, obj])
      const {data} = await axios.post('https://62d970bf9eedb699635c3307.mockapi.io/cart', obj)
      setCartItems(prev => prev.map(item => {
        if (item.parrentId === data.parrentId) {
          return {
            ...item,
            id: data.id
          } 
        }
        return item
      }))
    }
    } catch (error) {
      alert('Ошибка при добавлении в корзину')
      console.erroe(error)
    }
  }

  const onRemoveItem = (id) => {
    try {
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
      axios.delete(`https://62d970bf9eedb699635c3307.mockapi.io/cart/${id}`)
    } catch (error) {
      alert('Ошибка при удалении из корзины')
      console.erroe(error)
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.parrentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartOpened, setCartItems }}>
    <div className="wrapper clear">
      
      <Drawer 
      items={cartItems} 
      onClose={() => setCartOpened(false)} 
      onRemove={onRemoveItem} 
      opened={cartOpened}
      />

      <Header onClickCart={() => setCartOpened(true)}/>

      <Routes>
        <Route path="/" element={<Home 
          items={items} 
          cartItems={cartItems}
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/orders" element={<Orders />}/>
      </Routes>
      
       
    </div>
    </AppContext.Provider>
  );
}

export default App;
