import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Top10() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autopaySpeed: 1000,
    className: "autoplay",
  };
  const top10 = [
    {
      title: "Ковры полимерные с ковролиновыми вставками в салон",
      imgage: "img/ACMRCM03_original.jpg",
      price: 50,
    },
    {
      title: "Зарядный универсальный датакабель",
      image: "img/ACHM18_original.jpg",
      price: 45,
    },
    {
      title: "Сайлентблок задней балки",
      image: "img/01172_original.jpg",
      price: 150,
    },
    {
      title: "Фильтр салона угольный",
      image: "img/NF6167C_original.jpg",
      price: 50,
    },
    {
      title: "Набор торсионных бит",
      image: "img/NF6167C_original.jpg",
      price: 50,
    },
    {
      title: "Женская куртка",
      image: "img/B66950973_original.jpg",
      price: 50,
    },
    {
      title: "Освежитель воздуха 'Органик:'",
      image: "img/AS560CH_original.jpg",
      price: 50,
    },
    {
      title: "ШРУС наружный",
      image: "img/01343_original.jpg",
      price: 50,
    },
    {
      title: "Прокладка, крышка головки цилиндра",
      image: "img/AS560CH_original.jpg",
      price: 50,
    },
    {
      title: "Трансмиссионное масло Castrol Syntrax Universal Plus 75W-90",
      image: "img/154FB4_original.jpg",
      price: 50,
    },
  ];

  return (
    <div className="topp10box">
      <div className="b-top10box-head">
        <h2>Специальное предложение</h2>
      </div>
      <Slider {...settings}>
        {top10.map((item, index) => (
          <div className="b-item slick-cloned" key={index}>
            <Link to="#">
              <div className="slide-content">
                <p>{item.title}</p>
                <img src={item.image} alt="" />
              </div>
            </Link>
            <div>
              <h2>{item.price} c.</h2>
              <button>Купить</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
