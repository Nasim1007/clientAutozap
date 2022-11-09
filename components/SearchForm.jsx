import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context";
import { fetchDevices } from "../http/deviceAPI";

const SearchForm = observer(() => {
  const { user } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    setDropDown(user.searchResult.length > 1);
  }, [user.searchResult]);

  useEffect(() => {
    if (searchInput.length > 3) {
      fetchDevices(searchInput).then((data) => user.setSearchResult(data));
    }
    if (searchInput.length === 0) {
      setDropDown(false);
    }
  }, [searchInput]);

  return (
    <div className="b-header-search">
      <form action="" className="relative ">
        <ul className="b-h-s-list f-a clear rounded flex-wrap ">
          <li className="rounded drop-shadow-md border-inherit">
            <div className="b-search-container f-a">
              <div className="easy-autocomplete">
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  className="b-input-search rounded border"
                  name="oem"
                  id="oem"
                  placeholder="Введите код детали, название или VIN"
                />
              </div>
              <div
                onClick={() => setSearchInput("")}
                className="search-history"
              ></div>
            </div>
          </li>
          <li className="b-item-send">
            <button className="b-btn-send">Найти</button>
          </li>
          <li className="b-item-vin">
            <Link to="" className="link-vin">
              Запрос по VIN
            </Link>
          </li>
        </ul>

        {dropDown ? (
          <ul className="text-black absolute z-[1] bg-white w-full ease-in-out">
            {user.searchResult.map((item) => (
              <Link
                onClick={() => setSearchInput("")}
                to={`catalog/${item.category}`}
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="b-example">
            Например: <Link to="">MDB2634</Link>
          </div>
        )}
      </form>
    </div>
  );
});

export default SearchForm;
