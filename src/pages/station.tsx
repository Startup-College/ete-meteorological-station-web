import useStation from "@/hooks/useStation";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Station() {
  const { stationName } = useParams();
  const { getLastReading, isLoading } = useStation();
  useEffect(() => {
    if (!stationName) {
      return;
    }
    getLastReading();
  }, []);
  if (isLoading) return <div>Loading</div>;
  return <div>Station</div>;
}

export default Station;
