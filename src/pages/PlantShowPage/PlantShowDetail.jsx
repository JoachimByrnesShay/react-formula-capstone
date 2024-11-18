import PlantHeading from "./PlantHeading";
import BenefitsSection from "./BenefitsSection";
import PlantPurchaseOptions from "./PlantPurchaseOptions";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { useState } from "react";
const PlantShowDetail = props => {
  const { id, name, price, description, images, care_instructions, botanical_name } = props.plant;
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl flex md:flex-row flex-col justify-center px-10 md:px-20 font-lato">
        <div className="flex items-center flex-col flex-1 md:mr-8">
          <div className="md:hidden block">
            <PlantHeading plant={props.plant} />
          </div>
          <div className="flex flex-1 md:px-10">
            {" "}
            <Zoom>
              <img
                src={images[selectedImage].src}
                className="rounded-2xl"
              />
            </Zoom>
          </div>

          <div className="flex justify-center pt-8">
            <BenefitsSection
              icon="fa-regular fa-circle-check"
              title="Guaranteed Healthy"
              description="Guaranteed to arrive healthy or your money back"
            />
            <div className="w-[1px] bg-stone-300"></div>
            <BenefitsSection
              icon="fa-solid fa-truck-fast"
              title="Free Shipping"
              description="Get free ground shipping on orders of $50 or more"
            />
          </div>
        </div>
        <div className="md:flex md:flex-col md:flex-1">
          <div className="hidden md:block">
            <PlantHeading plant={props.plant} />
          </div>

          <div className="mt-6 text-neutral-900 mb-10">{description}</div>
          <div className="flex text-emerald-800 items-center mb-3 text-lg">
            <i className="fa-solid fa-palette mr-1"></i>
            <div>Pot Colors</div>
          </div>
          <PlantPurchaseOptions
            plant={props.plant}
            setSelected={setSelectedImage}
            selected={selectedImage}
          />
        </div>
      </div>
    </div>
  );
};

export default PlantShowDetail;
