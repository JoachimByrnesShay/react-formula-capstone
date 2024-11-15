import NavBar from "shared-components/NavBar";
import SessionContext from "context/SessionContext";
import { useContext, useEffect, useState } from "react";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSigninIfSignedOut";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared-components/LoadingSpinner";

const PlantListPage = () => {
  const { userName } = useContext(SessionContext);
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);
    })();
  }, []);
  plants.length && console.log("plants here: ", plants);
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="flex justify-center bg-green-50 min-h-[calc(100vh-110px)]">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="w-full h-max max-w-6xl pt-12 flex flex-col items-center">
            <div className="font-playfair">PUTTING PLANTS IN HERE</div>
            <div className="flex mt-10 flex-wrap justify-center">
              {plants.map(plant => (
                <PlantItem
                  key={plant.id}
                  plant={plant}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
