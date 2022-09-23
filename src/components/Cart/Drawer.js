import { CartItem } from "./CartItem";

export const Drawer = ({ onClose, items = [] }) => {
  console.log(items);
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="drawer__heading">
          Cart
          <img src="./img/btn-remove.svg" onClick={onClose} />
        </h2>
        <div className="items">
          {items.map((obj, i) => {
            console.log(obj);
            return <CartItem key={i} items={obj} />;
          })}
        </div>

        <div className="drawer-bottom">
          <ul>
            <li className="drawer-bottom__price">
              <span>Total:</span>
              <div className="dashed-line"></div>
              <b>240$</b>
            </li>
            <li className="drawer-bottom__donation">
              <span>UA Army 5%:</span>
              <div className="dashed-line"></div>
              <b>12$</b>
            </li>
          </ul>
          <button className="order-btn">
            Make order
            <img src="./img/arrow-right.svg" alt="Arrow icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
