import { useNavigate } from "react-router-dom";
import images from "../assets/image/images.png";
const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/device/" + device.id)}>
      <div className="card" style={{ width: 150, cursor: "pointer" }}>
        <img
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + device.img}
          alt=""
        />
        <div className="d-flex align-items-center justify-content-between">
          <div>{device.brand} ... </div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <img src={images} width={18} height={18} alt="" />
          </div>
        </div>
        <div>{device.name} </div>
      </div>
    </div>
  );
};

export default DeviceItem;
