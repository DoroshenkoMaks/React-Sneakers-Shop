export const CartItem = (props) => {
  console.log(props.items);
  return (
    <div className="cart-item">
      <img
        className="cart-item__img"
        src={props.items.imgLink}
        alt="Sneakers"
      />
      <div>
        <p>{props.items.cardName}</p>
        <b>{props.items.cardPrice}</b>
      </div>
      <img src="./img/btn-remove.svg" className="btn-remove" alt="Remove" />
    </div>
  );
};
