import { Chart } from "@/components/chart";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import useStation from "@/hooks/useStation";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Station() {
  const { stationId } = useParams();
  const [chartType, setChartType] = useState<
    "temperature" | "humidity" | "rainfallVolume"
  >("temperature");

  const { getReadings, isLoading, readings } = useStation();
  useEffect(() => {
    if (!stationId) {
      return;
    }
    getReadings(stationId);
  }, []);
  if (isLoading || !readings)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div className="w-full flex flex-1 pt-4 flex-col space-y-4 pb-4">
      <div className="w-full px-2 md:px-0 md:w-[90%] mx-auto ">
        <Chart data={readings} type={chartType} />
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-row md:space-y-0 md:space-x-4 flex-col items-center justify-center gap-2 md:gap-0 px-4 md:px-0">
        <Button onClick={() => setChartType("temperature")}>Temperatura</Button>
        <Button onClick={() => setChartType("humidity")}>Umidade</Button>
        <Button onClick={() => setChartType("rainfallVolume")}>
          Volume de chuva
        </Button>
      </div>
    </div>
  );
}

export default Station;
