import Card from "./components/card";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40 ">
        <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png"/>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={20} height={15} src="/img/cart.svg"/>
            <span>1205 грн.</span>
          </li>
          <li>
          <img width={20} height={20} src="/img/user.svg"/>
          </li>
        </ul>
      </header>
       <div class="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="d-flex">
        <Card/>
        <Card/>
        </div>

       </div>
    </div>
  );
}

export default App;
