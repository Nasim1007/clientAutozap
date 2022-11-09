import { $authHost, $host } from ".";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};
export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};
export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};
export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};
export const createDevice = async (device) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};
export const searchDevice = async (name) => {
  const { data } = await $host.get("api/device", {
    params: { name },
  });
  return data;
};
export const fetchDevices = async (
  name,
  category,
  brandId,
  typeId,
  page,
  limit = 20
) => {
  const { data } = await $host.get("api/device", {
    params: {
      name,
      category,
      brandId,
      typeId,
      page,
      limit,
    },
  });
  return data;
};
export const fetchOneDevice = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};

export const createBrandOil = async (brandOil) => {
  const { data } = await $host.post("api/toil/brand", brandOil);
  return data;
};
export const fetchBrandOils = async () => {
  const { data } = await $host.get("api/toil/brand");
  return data;
};

export const createTypedOil = async (typeOil) => {
  const { data } = await $host.post("api/toil/type", typeOil);
  return data;
};
export const fetchTypeOils = async () => {
  const { data } = await $host.get("api/toil/type");
  return data;
};

export const createTOil = async (tOil) => {
  const { data } = await $host.post("api/toil/device", tOil);
  return data;
};

export const fetchOils = async (brandOilId, typeOilId, page, limit) => {
  const { data } = await $host.get("api/toil/device", {
    params: {
      brandOilId,
      typeOilId,
      page,
      limit,
    },
  });
  return data;
};
