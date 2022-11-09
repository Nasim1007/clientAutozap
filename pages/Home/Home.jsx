import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Top10 from "../../components/Top10";
import { Baner } from "../../components/Baner";

export default function Home() {
  return (
    <div className="home">
      <Baner />
      <ul className="b-promolist">
        <li className="b-item b-item-1">
          <div className="b-inner">
            <Link to="catalog/tires" className="">
              <img className="" src="./img/nk1-tire.jpg" alt="catalog=tires" />
              <span className="b-label">
                <span>Каталог шин</span>
              </span>
            </Link>
          </div>
        </li>
        <li className="b-item b-item-2">
          <ul className="b-item2-inner f-a">
            <li className="b-item b-item-2a">
              <div className="b-inner">
                <Link to="catalog/toils">
                  <img src="img/nk2-oil.jpg" alt="" />
                  <span className="b-label">
                    <span>Трансмиссионные масла</span>
                  </span>
                </Link>
              </div>
            </li>
            <li className="b-item b-item-2b ">
              <div className="b-inner">
                <Link to="catalog/akoms">
                  <img src="img/nk2-battery.jpg" alt="" />
                  <span className="b-label">
                    <span>Аккумуляторы</span>
                  </span>
                </Link>
              </div>
            </li>
          </ul>
          <div className="b-inner b-item-2c">
            <Link to="catalog/pallets">
              <img src="./img/nk2-c_original.png" alt="" />
              <span className="b-label">
                <span>Защита картера</span>
              </span>
            </Link>
          </div>
        </li>
        <li className="b-item b-item-3">
          <div className="b-inner">
            <Link to="catalog/mainparts">
              <img src="./img/nk3_original.jpg" alt="запчасти ТО" />
              <span className="b-label">
                <span>Запчасти для ТО</span>
              </span>
            </Link>
          </div>
        </li>
        <li className="b-item b-item-4">
          <div className="b-inner">
            <Link to="catalog/rims">
              <img src="./img/nk4_original.jpg" alt="диски" />
              <span className="b-label">
                <span>Каталог дисков</span>
              </span>
            </Link>
          </div>
        </li>
        <li className="b-item b-item-5">
          <div className="b-inner">
            <Link to="catalog/glasses">
              <img
                src="./img/glass-back_original.png"
                alt="Автомобильные стекла"
              />
              <span className="b-label">
                <span>Автомобильные стекла</span>
              </span>
            </Link>
          </div>
        </li>
        <li className="b-item b-item-6">
          <div className="b-inner">
            <Link to="catalog/moils">
              <img src="./img/nk6_original.jpg" alt="Моторные масла" />
              <span className="b-label">
                <span>Моторные масла</span>
              </span>
            </Link>
          </div>
        </li>
      </ul>
      <Top10 />
    </div>
  );
}
