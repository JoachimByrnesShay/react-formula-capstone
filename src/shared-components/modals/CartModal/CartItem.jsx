import { useState } from "react";
const CartItem = props => {
  const { id, image_src, plant_name, pot_color, price_per_unit, quantity } = props.product;
  const { onDelete } = props;
  return (
    <div
      className="w-full flex justify-between shadow-2xl pr-2
  "
    >
      <img
        src={image_src}
        className="rounded-lg h-[100px] mr-4"
      />
      <div className="flex flex-1 justify-between items-baseline">
        <div className="flex flex-col">
          <div className="text-emerald-800 font-playfair flex leading-snug items-baseline text-lg mb-2">
            {plant_name}
          </div>
          <div className="flex flex-col">
            <div className="flex mb-2">
              <div className="w-14 text-stone-500">qty:</div>{" "}
              <div className="text-stone-600">{quantity}</div>
            </div>
            <div className="flex">
              <div className="w-14 text-stone-500">color:</div>{" "}
              <div className="text-stone-600">{pot_color}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end h-full mb-2">
          <div className="place-content-start">${price_per_unit * quantity}</div>
          <button
            className="flex"
            onClick={() => onDelete({ itemId: id })}
          >
            <i className="fa-regular fa-trash-can mr-1"></i>
            <div className="text-sm mb-2">remove</div>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
