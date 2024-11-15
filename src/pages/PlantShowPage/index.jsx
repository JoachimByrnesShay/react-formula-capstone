import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import PlantShowDetail from "./PlantShowDetail";
import LoadingSpinner from "shared-components/LoadingSpinner";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSigninIfSignedOut";
import * as plantServices from "services/plant";
const PlantShowPage = props => {
  const { plantId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [plant, setPlant] = useState({});
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const response = await plantServices.getPlantById(plantId);
      const data = await response.json();
      console.log("here in the plant guy: ", data);
      setPlant(data);
      setIsLoading(false);
    })();
  }, [plantId]);
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
      <div className="min-h-[calc(100vh-110px)] bg-emerald-50 px-8 py-16">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="">
            {" "}
            <PlantShowDetail plant={plant} />
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantShowPage;
