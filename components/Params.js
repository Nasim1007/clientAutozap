import React, { useContext, useState } from "react";
import AppContext from "../context";
import { observer } from "mobx-react-lite";

const Params = observer(() => {
  const { devices } = useContext(AppContext);
  return (
    <ul className="param-list">
      {devices.brandOils.map((brand) => (
        <li key={brand.id}>
          <input
            type="checkBox"
            value={brand.name}
            onChange={() => devices.setSelectedOilBrand(brand)}
            checked={brand.id === devices.selectedOilBrand.id}
          />
          {brand.name}
        </li>
      ))}
    </ul>
  );
});

export default Params;
