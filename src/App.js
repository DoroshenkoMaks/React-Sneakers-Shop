import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Drawer } from "./components/Cart/Drawer";
import { Header } from "./components/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://6320b3ff82f8687273a5fd7c.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const onAddToCart = (content) => {
    console.log(content);
    setCartItems((prev) => [...prev, content]);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">
        <div className="content__header">
          <h1>All Sneakers</h1>
          <div className="search">
            <img src="./img/search.svg" alt="Search icon" />
            <input placeholder="Find..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map((item, i) => {
            return (
              <Card
                imgLink={item.imgLink}
                cardName={item.name}
                cardPrice={item.price}
                key={i}
                onAdd={onAddToCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
