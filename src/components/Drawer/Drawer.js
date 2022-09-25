import { DrawerItem } from "./DrawerItem/DrawerItem";
import style from "./Drawer.module.scss";

export const Drawer = ({ onClose, items = [], onRemove }) => {
  console.log(items);
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2 className={style.drawerHeading}>
          Cart
          <img src="./img/btn-remove.svg" onClick={onClose} />
        </h2>

        {items.length > 0 ? (
          <div className={style.drawerItems}>
            {items.map((obj, i) => {
              return <DrawerItem key={i} items={obj} onRemove={onRemove} />;
            })}
          </div>
        ) : (
          <div className={style.drawerEmpty}>
            <img
              className={style.drawerEmptyImg}
              src="/img/cart-empty.jpeg"
              alt="Empty cart"
            />
            <h2>Cart Empty</h2>
            <p>Add sneakers to make a order</p>
            <button
              onClick={onClose}
              className={`greenButton ${style.greenButton}`}
            >
              <img src="/img/arrow-left.svg" alt="Arrow" />
              Come back
            </button>
          </div>
        )}
        {items.length > 0 ? (
          <div className={style.drawerTotal}>
            <ul>
              <li>
                <span>Total:</span>
                <div className={style.dashedLine}></div>
                <b>240$</b>
              </li>
              <li>
                <span>UA Army 5%:</span>
                <div className={style.dashedLine}></div>
                <b>12$</b>
              </li>
            </ul>
            <button className="greenButton">
              <img src="./img/arrow-right.svg" alt="Arrow icon" />
              Make order
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
