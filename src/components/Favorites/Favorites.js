import { useEffect } from "react";
import { Card } from "../MainContent/Card/Card";
import style from "./Favorites.module.scss";

export const Favorites = (props) => {
  return (
    <div className="content">
      <div className="contentHeader">
        <img src="./img/back-btn.svg" alt="Back button" />
        <h1>Favorites</h1>
      </div>
      <div className={style.favorites}>
        {props.favorites.length > 0
          ? props.favorites.map((item, i) => {
              console.log(item);
              return (
                <Card
                  imgLink={item.imgLink}
                  cardName={item.cardName}
                  cardPrice={item.cardPrice}
                  key={i}
                  onAdd={props.onAdd}
                  onFavourite={props.onFavourite}
                />
              );
            })
          : "Is Empty"}
      </div>
    </div>
  );
};
