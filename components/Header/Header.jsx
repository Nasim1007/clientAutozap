import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import { check, fetchBasket } from "../../http/userAPI";
import SearchForm from "../SearchForm";

const Header = observer(() => {
  const { user } = useContext(AppContext);

  const totalPrice = user.basketDevices.reduce(
    (sum, item) => item.price + sum,
    0
  );

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .then(() => fetchBasket(user.user.email))
      .then((data) => {
        user.setBasketDevices(data.rows);
        user.setTotalCount(data.count);
      });
  }, []);

  const onClickLogOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    user.setBasketDevices([]);
    user.setTotalCount(0);
  };
  return (
    <header>
      <div className="header-top-side">
        <div className="clearFix">
          <div className="location f-a">
            <Link to="/location" className="f-a">
              <img src="icon/i-place.png" alt="loacation" className="m-r-5" />
              <span> Dushanbe</span>
            </Link>
          </div>
          <div className="basket-box">
            <Link to="/basket" className="f-a ">
              <img
                src="icon/i-basket.png"
                alt="basket"
                className="icon30 m-l-r-10"
              />
              <ul className="clear t-a-left">
                <li>{user.totalCount} товаров</li>
                <li>{totalPrice} сомони</li>
              </ul>
            </Link>
          </div>
          {user.isAuth ? (
            <div className="user f-a ">
              <Link to="/profile " className="f-a">
                <img src="icon/i-prcab.webp" className="m-r-5" alt="regist" />
                Личный кабинет
              </Link>
              <Link onClick={onClickLogOut} to className="f-a m-l-r-10 ">
                <img src="icon/i-exit.webp" alt="enter" className="m-r-5" />
                Выход
              </Link>
            </div>
          ) : (
            <div className="user f-a ">
              <Link to="/login" className="f-a m-l-r-10 ">
                <img src="icon/i-enter.png" alt="enter" className="m-r-5" />
                Вход
              </Link>
              <Link to="/registration " className="f-a">
                <img src="icon/i-reg.png" className="m-r-5" alt="regist" />
                Регистрация
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="header-mid-side f-a">
        <div className="b-burger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="b-logo">
          <Link to="/" className="logo-link">
            <span className="b-ico">
              <img src="img/logo.png" alt="" className="logo" />
            </span>
            <span className="b-txt">автозапчасти</span>
          </Link>
        </div>
        <SearchForm />
        <div className="b-h-contact">
          <div className="b-phone">
            <a href="tel:+992900144747">+992900144747</a>
          </div>
          <ul className="b-list clear">
            <li>c 9-00 до 19-00</li>
            <li>c 10-00 до 18-00</li>
            <li className="b-hday">выходной</li>
          </ul>
        </div>
      </div>
    </header>
  );
});
export default Header;
