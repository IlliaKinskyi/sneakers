import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import sneakersList from "./sneakersList";
import React from "react";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      
       <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>

          </div>
        </div>

        <div className="d-flex">
          {sneakersList.map((obj) => (
            <Card 
              title={obj.title} 
              price={obj.price} 
              image={obj.image}
              key={obj.id}
              onFavorite={() => console.log('Click Favorite')}
              onPlus={() => console.log('Click Plus')}
            />
            ))}
        </div>

       </div>
    </div>
  );
}

export default App;
