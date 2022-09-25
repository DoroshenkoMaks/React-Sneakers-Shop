import { Card } from "../MainContent/Card/Card";
import { Link } from "react-router-dom";
// import style from "./Favorites.module.scss";

export const Favorites = (props) => {
  return (
    <div className="content">
      <div className="contentHeader">
        <div className="contentHeading">
          <Link to="/">
            <img src="./img/back-btn.svg" alt="Back button" />
          </Link>
          <h1>Favorites</h1>
        </div>
      </div>

      {props.favorites.length > 0 ? (
        props.favorites.map((item, i) => {
          console.log(item);
          return (
            <div className="contentItems">
              <Card
                imgLink={item.imgLink}
                cardName={item.cardName}
                cardPrice={item.cardPrice}
                key={i}
                onAdd={props.onAdd}
                onFavourite={props.onFavourite}
              />
            </div>
          );
        })
      ) : (
        <div className="contentEmpty">
          <p className="contentEmptyEmoji">🥺</p>
          <h2>Cart Empty</h2>
          <p className="contentEmptyText">Add sneakers to make a order</p>
          <Link to="/">
            <button className="greenButton">
              <img src="/img/arrow-left.svg" alt="Arrow" />
              Come back
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
