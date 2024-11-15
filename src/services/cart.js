import apiFetch from "./apiFetch";

export const addToCart = ({ plantId, quantity, potColor }) => {
  return apiFetch("POST", `/cart/plants/${plantId}`, { quantity, pot_color: potColor });
};

export const getCart = () => {
  return apiFetch("GET", "/cart");
};

export const deleteFromCart = ({ itemId }) => {
  return apiFetch("DELETE", `/cart/${itemId}`);
};
