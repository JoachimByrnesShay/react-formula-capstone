import { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { POT_COLORS } from "shared-components/utils";

const PlantItem = props => {
  const { name, price, images, id } = props.plant;
  const [currentImage, setCurrentImage] = useState(Math.floor(Math.random() * images.length));
  return (
    <div className="m-8">
      <Link to={`/plants/${id}`}>
        <img
          className="w-[280px] h-[320px] rounded-lg"
          src={images[currentImage].src}
        />
      </Link>
      <div className="flex justify-between font-playfair">
        <div className="text-xl text-emerald-700">{name}</div>
        <div className="text-lg text-emerald-600"> ${price}</div>
      </div>
      <div className="flex justify-between">
        <div>{images[currentImage].pot_color}</div>
        <div className="flex">
          {images.map((img, ix) => (
            <button
              key={ix}
              onMouseOver={() => setCurrentImage(ix)}
              className={clsx("m-[3px] w-4 h-4 rounded-full border border-stone-500", [
                POT_COLORS[img.pot_color],
                currentImage === ix && "outline outline-offset-2 outline-zinc-400",
              ])}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
