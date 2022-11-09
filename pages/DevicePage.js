import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bigStar from "../assets/image/images.png";
import { fetchOneDevice } from "../http/deviceAPI";
import { createBasket, fetchBasket } from "../http/userAPI";
import AppContext from "../context";
import { observer } from "mobx-react-lite";

const DevicePage = observer(() => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const checkOut = () => {
    if (!user.isAuth) {
      navigate("/login");
    }
    const formData = new FormData();
    formData.append("deviceId", id);
    formData.append("img", device.img);
    formData.append("price", `${device.price}`);
    formData.append("name", device.name);
    formData.append("email", user.user.email);
    console.log(id + "     " + user.user.email);
    createBasket(formData)
      .then(() => fetchBasket(user.user.email))
      .then((data) => {
        user.setBasketDevices(data.rows);
        user.setTotalCount(data.count);
      });
  };

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);
  return (
    <div className="container px-[60px] ">
      <button className="" onClick={() => navigate(-1)}>
        <svg
          className="w-[30px] h-[30px]"
          enable-background="new 0 0 512 512"
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M226.057,105.557v61.918v19.701l19.701,0.194c136.853,1.321,213.945,62.191,234.025,185.542  c-75.179-86.962-161.868-87-233.821-87.02h-19.905v19.895v61.025L41.634,236.175L226.057,105.557 M245.952,67.07L7.216,236.175  l238.736,169.105v-99.493c95.549,0.039,184.133,4.857,259.048,138.447c0-84.844-14.018-274.387-259.048-276.758V67.07L245.952,67.07  z"
            fill="#37404D"
          />
        </svg>
      </button>
      <div className="flex items-center jusctify-eventy ">
        <div className="mx-4">
          <img
            width={200}
            height={200}
            src={process.env.REACT_APP_API_URL + device.img}
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center flex-column">
            <h2>{device.name}</h2>
            <div
              className="flex items-center justify-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </div>
        </div>
        <div>
          <div
            className="f-a justify-content-center flex-column"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>от: {device.price} TJK </h3>
            <button
              className="rounded border-2  border-rose-700 hover:bg-sky-700 hover:text-white p-1 focus:translate-y-1 "
              onClick={checkOut}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column ">
        <h2>Характеристика</h2>
        {device.info.map((info, index) => (
          <div
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </div>
        ))}
      </div>
    </div>
  );
});

export default DevicePage;
