export const Header = (props) => {
  return (
    <header>
      <div className="header-left">
        <img src="./img/logo.png" className="logo" alt="logo" />
        <div className="header-info">
          <h3>React Sneakers</h3>
          <p>Best shop</p>
        </div>
      </div>
      <ul className="header-right">
        <li onClick={props.onClickCart}>
          <img src="./img/cart.svg" />
          <span>1205 uah</span>
        </li>
        <li>
          <img src="./img/user.svg" />
        </li>
      </ul>
    </header>
  );
};
