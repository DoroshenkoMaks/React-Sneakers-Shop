import style from "./DrawerItem.module.scss";

export const DrawerItem = (props) => {
  console.log(props.items);
  return (
    <div className={style.drawerItem}>
      <img
        className={style.drawerItemImg}
        src={props.items.imgLink}
        alt="Sneakers"
      />
      <div>
        <p>{props.items.cardName}</p>
        <b>{props.items.cardPrice}</b>
      </div>
      <img
        onClick={() => props.onRemove(props.items.id)}
        src="./img/btn-remove.svg"
        className={style.drawerItemRemoveButton}
        alt="Remove"
      />
    </div>
  );
};
