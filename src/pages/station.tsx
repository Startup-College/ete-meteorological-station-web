import useStation from "@/hooks/useStation";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Station() {
  const { stationName } = useParams();
  const { getStationData, isLoading } = useStation();
  useEffect(() => {
    if (!stationName) {
      return;
    }
    setInterval(() => {
      getStationData(stationName);
    }, 900000);
  }, [getStationData, stationName]);
  if (isLoading) return <div>Loading</div>;
  return <div>Station</div>;
}

export default Station;
