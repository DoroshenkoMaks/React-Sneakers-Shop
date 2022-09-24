import { useState } from "react";
import style from "./Card.module.scss";

export const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickAddButton = () => {
    !isAdded && props.onAdd(props);

    setIsAdded(!isAdded);
  };
  const onClickLikeButton = () => {
    !isAdded && props.onFavourite(props);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={style.card}>
      <img
        onClick={onClickLikeButton}
        src={`./img/like-btn${isFavorite ? "-clicked" : "-new"}.svg`}
        className={style.heartBtn}
        alt="Unliked"
      />
      <img className={style.cardImage} src={props.imgLink} />
      <h5>{props.cardName}</h5>
      <div className={style.cardBottom}>
        <div className={style.cardPrice}>
          <span>Price</span>
          <b>{props.cardPrice}</b>
        </div>

        <img
          className={style.plusBtn}
          onClick={onClickAddButton}
          src={`./img/btn-plus${isAdded ? "-clicked" : ""}.svg`}
          alt="add"
        />
      </div>
    </div>
  );
};
