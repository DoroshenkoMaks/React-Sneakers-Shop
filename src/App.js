import { useEffect, useState } from "react";
import "./App.css";
import { Drawer } from "./components/Drawer/Drawer";
import { Header } from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { MainContent } from "./components/MainContent/MainContent";
import { Favorites } from "./components/Favorites/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get("https://6320b3ff82f8687273a5fd7c.mockapi.io/items")
      .then((res) => setItems(res.data));

    axios
      .get("https://6320b3ff82f8687273a5fd7c.mockapi.io/cart")
      .then((res) => setCartItems(res.data));

    axios
      .get("https://6320b3ff82f8687273a5fd7c.mockapi.io/favourites")
      .then((res) => {
        console.log("We get favorites");
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (content) => {
    setCartItems((prev) => [...prev, content]);

    axios.post("https://6320b3ff82f8687273a5fd7c.mockapi.io/cart", content);
  };

  const onAddToFavorite = (content) => {
    axios.post(
      "https://6320b3ff82f8687273a5fd7c.mockapi.io/favourites",
      content
    );
    setFavorites((prev) => [...prev, content]);
  };

  const onRemoveItemCart = (id) => {
    axios.delete(`https://6320b3ff82f8687273a5fd7c.mockapi.io/cart/${id}`);

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItemCart}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
        <Route
          path="/"
          element={
            <MainContent
              items={items}
              onAdd={onAddToCart}
              onFavourite={onAddToFavorite}
            />
          }
        />
        <Route path="/order" element={<div>Order</div>} />
      </Routes>
    </div>
  );
}

export default App;
