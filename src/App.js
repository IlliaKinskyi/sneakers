
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between">
        <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png"/>
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
        </div>
        <ul className="headerRight">
          <li>
          <img width={20} height={15} src="/img/cart.svg"/>
            <span>1205 грн.</span>
          </li>
          <li>
          <img width={20} height={20} src="/img/user.svg"/>
          </li>
        </ul>
      </header>
       <div class="content">
        <h1>Все кроссовки</h1>
        ....
       </div>
    </div>
  );
}

export default App;
