import { POT_COLORS } from "shared-components/utils";
import clsx from "clsx";
import { useState } from "react";
import * as cartServices from "services/cart";

const PlantPurchaseOptions = props => {
  const { plant, selected, setSelected } = props;
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = async () => {
    setIsLoading(true);
    const cart = {
      plantId: plant.id,
      potColor: plant.images[selected].pot_color,
      quantity,
    };
    //console.log(cart);
    const response = await cartServices.addToCart(cart);
    console.log(response.status);
    console.log(await response.json());
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex justify-center md:justify-normal">
        {plant.images.map((img, ix) => (
          <div
            key={ix}
            className="flex flex-col mx-3 items-center"
            onMouseOver={() => setSelected(ix)}
          >
            <div
              className={clsx("w-8 h-8 rounded-full border border-stone-400 mb-1", [
                POT_COLORS[img.pot_color],
                ix === selected && "outline outline-offset-2 outline-stone-300",
              ])}
            ></div>
            <div> {img.pot_color}</div>
          </div>
        ))}
      </div>
      <div className="flex mt-8 justify-center">
        <div className="flex items-center border border-emerald-800 rounded-full px-2 py-4 mr-2">
          <button onClick={quantity > 1 ? () => setQuantity(quantity - 1) : undefined}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-6 text-lg">{quantity}</div>
          <button onClick={() => setQuantity(quantity + 1)}>
            {" "}
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          className="flex flex-1 items-center justify-center  bg-emerald-700 rounded-full text-white hover:bg-emerald-800 w-full px-2"
          onClick={() => addToCart()}
        >
          <i
            className={clsx(
              "fa-solid mr-2",
              isLoading ? "fa-spinner animate-spin" : "fa-cart-plus"
            )}
          ></i>
          <div>Add to Cart</div>
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
