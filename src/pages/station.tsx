import { Chart } from "@/components/chart";
import Loading from "@/components/loading";
import useStation from "@/hooks/useStation";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Station() {
  const [searchParams] = useSearchParams();
  const { stationName } = useParams();
  const [stationId, setStationId] = useState("");
  const { getStationData, isLoading, readings } = useStation();
  useEffect(() => {
    const stationId = searchParams.get("id");
    if (!stationId) {
      return;
    }
    setStationId(stationId);
    getStationData(stationId);
  }, [searchParams]);

  if (isLoading || !stationName || !stationId)
    return (
      <div className="w-full flex items-center justify-center pt-24">
        <Loading size={64} />
      </div>
    );
  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <div className="w-2/3">
        <Chart
          type="temperature"
          data={readings}
          station={{ name: stationName, id: stationId }}
        />
      </div>
    </div>
  );
}

export default Station;
