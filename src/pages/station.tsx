import Loading from "@/components/loading";
import useStation from "@/hooks/useStation";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Station() {
  const [searchParams] = useSearchParams();
  const { stationName } = useParams();
  const { getStationData, isLoading, readings } = useStation();
  useEffect(() => {
    const stationId = searchParams.get("id");
    if (!stationId) {
      return;
    }

    getStationData(stationId);
  }, [searchParams]);

  if (isLoading)
    return (
      <div className="w-full flex items-center justify-center pt-24">
        <Loading size={64} />
      </div>
    );
  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <h1>{stationName?.split("-").join(" ")}</h1>
    </div>
  );
}

export default Station;
