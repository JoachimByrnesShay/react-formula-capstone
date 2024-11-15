import apiFetch from "./apiFetch";

export const getPlants = () => {
  // const response = await apiFetch("GET", "/plants");
  // console.log("getplants guy: ", response.status);
  // const data = await response.json();
  // return data;
  return apiFetch("GET", "/plants");
};

export const getPlantById = id => {
  return apiFetch("GET", `/plants/${id}`);
};
