import { useState } from "react";
import style from "./Card.module.scss";

console.log(style);

export const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const onClickAddButton = () => {
    console.log(isAdded);
    !isAdded && props.onAdd(props);

    setIsAdded(!isAdded);
  };

  return (
    <div className={style.card}>
      <img
        src="./img/like-btn-new.svg"
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
