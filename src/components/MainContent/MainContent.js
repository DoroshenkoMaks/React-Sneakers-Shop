import { useState } from "react";
import { Card } from "./Card/Card";

export const MainContent = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="content">
      <div className="contentHeader">
        <h1>
          {searchValue ? `Search by filter: ${searchValue}` : `All Sneakers`}
        </h1>
        <div className="contentSearch">
          <img src="./img/search.svg" alt="Search icon" />
          {searchValue && (
            <img
              src="./img/btn-remove.svg"
              className="contentClearInputButton"
              alt="Clear input"
              onClick={() => setSearchValue("")}
            />
          )}
          <input
            onChange={onChangeSearchInput}
            placeholder="Find..."
            value={searchValue}
          />
        </div>
      </div>

      <div className="contentItems">
        {props.items
          .filter((item) => item.name.toLowerCase().includes(searchValue))
          .map((item, i) => {
            return (
              <Card
                imgLink={item.imgLink}
                cardName={item.name}
                cardPrice={item.price}
                key={i}
                onAdd={props.onAdd}
                onFavourite={props.onFavourite}
              />
            );
          })}
      </div>
    </div>
  );
};
