import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeviceList from "../components/DeviceList";

const Catalogs = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  console.log(name);
  return (
    <div>
      <button className="px-[50px]" onClick={() => navigate(-1)}>
        <svg
          className="w-[30px] h-[30px] "
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
      <DeviceList category={name} />
    </div>
  );
};

export default Catalogs;
