import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import sneakersList from "./sneakersList";

function App() {
  return (
    <div className="wrapper clear">

    <div style={{display: 'none'}} className="overlay">
      <Drawer/>
    </div>

      <Header/>
      
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
