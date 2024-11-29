import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartProps } from "@/interfaces/chart";
import { Readings } from "@/interfaces/readings";
import { TooltipProps } from "react-leaflet";
import {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { useState } from "react";

interface CustomTooltipProps extends TooltipProps {
  label: string;
  active: boolean | undefined;
  payload: Payload<ValueType, NameType>[] | undefined;
}

export function Chart({ data, type }: ChartProps) {
  const [timeRange, setTimeRange] = useState<
    "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "7d" | "30d"
  >("1d");

  const chartConfig = {
    desktop: handleChartType(type),
  } satisfies ChartConfig;

  function handleChartType(
    type: "temperature" | "humidity" | "rainfallVolume"
  ) {
    switch (type) {
      case "humidity":
        return {
          label: "Umidade",
          color: "#ca25bf",
        };
      case "rainfallVolume":
        return {
          label: "Volume de chuva",
          color: "#2538df",
        };
      case "temperature":
        return {
          label: "Temperatura",
          color: "#e2421a",
        };
      default:
        return {
          label: "Temperatura",
          color: "#e2421a",
        };
    }
  }

  const renderCustomLegend = () => {
    return (
      <div className="flex items-center pt-4 mx-auto w-full justify-center">
        <div
          className="size-3 rounded-sm"
          style={{ backgroundColor: chartConfig.desktop.color }}
        />
        <span className="ml-2 text-sm text-gray-900/80 font-medium">
          {chartConfig.desktop.label}
        </span>
      </div>
    );
  };

  const filteredData = data
    .filter((reading: Readings) => {
      const date = new Date(reading.dateTime);
      const referenceDate = new Date();

      // Tempo padrão é 1 dia (24 horas)
      let timeToSubtractInHours = 24;

      // Definir o tempo de acordo com `timeRange`
      switch (timeRange) {
        case "1h":
          timeToSubtractInHours = 2;
          break;
        case "2h":
          timeToSubtractInHours = 3;
          break;
        case "4h":
          timeToSubtractInHours = 5;
          break;
        case "8h":
          timeToSubtractInHours = 9;
          break;
        case "12h":
          timeToSubtractInHours = 13;
          break;
        case "1d":
          timeToSubtractInHours = 25;
          break;
        case "7d":
          timeToSubtractInHours = 7 * 24;
          break;
        case "30d":
          timeToSubtractInHours = 30 * 24;
          break;
        default:
          // Caso o timeRange seja inválido, usa o padrão (1 dia)
          timeToSubtractInHours = 24;
      }

      // Calcular a data inicial para o filtro
      const startDate = new Date(referenceDate);
      startDate.setHours(referenceDate.getHours() - timeToSubtractInHours);

      // Retornar apenas leituras que estão dentro do intervalo
      return date >= startDate;
    })
    .sort(
      (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
    );

  function CustomTooltip({
    active,
    payload,
    label,
  }: CustomTooltipProps): JSX.Element | null {
    if (active && payload && payload.length) {
      const reading = payload[0]; // Primeiro ponto de dado
      const date = new Date(label).toLocaleDateString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });

      return (
        <div className="p-2 bg-white shadow-md rounded-md border border-gray-200">
          <p className="text-sm font-medium text-gray-700">{date}</p>
          <p className="text-sm text-gray-600">
            <span
              className="inline-block w-2 h-2 rounded-[2px]"
              style={{ backgroundColor: reading.color }}
            ></span>{" "}
            <span className="capitalize">
              {reading.name === "temperature"
                ? "Temperatura"
                : reading.name === "humidity"
                ? "Umidade"
                : "Volume de Chuva"}
              : {reading.value}
            </span>
            {reading.name === "Temperatura"
              ? "°C"
              : reading.name === "Umidade"
              ? "%"
              : "mm"}
          </p>
        </div>
      );
    }
    return null;
  }

  function handleTimeDescription() {
    switch (timeRange) {
      case "1h":
        return "Dados da última hora de monitoramento";
      case "2h":
        return "Dados das últimas duas horas de monitoramento";
      case "4h":
        return "Dados das últimas quatro horas de monitoramento";
      case "8h":
        return "Dados das últimas oito horas de monitoramento";
      case "12h":
        return "Dados das últimas doze horas de monitoramento";
      case "1d":
        return "Dados das últimas vinte e quatro horas de monitoramento";
      case "7d":
        return "Dados das últimos sete dias de monitoramento";
      case "30d":
        return "Dados das últimos trinta dias de monitoramento";
      default:
        return "Dados das últimas vinte e quatro horas de monitoramento";
    }
  }

  if (!data[0]) {
    return null;
  }

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 py-5 flex-row">
        <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:justify-between">
          <div className="grid flex-1 gap-1 text-center sm:text-left">
            <CardTitle>Estação - {data[0].name.split("-").join(" ")}</CardTitle>
            <CardDescription>{handleTimeDescription()}</CardDescription>
          </div>
          <Select
            value={timeRange}
            onValueChange={(value) =>
              setTimeRange(
                value as "1h" | "2h" | "4h" | "8h" | "12h" | "1d" | "7d" | "30d"
              )
            }
          >
            <SelectTrigger
              className="w-[200px] rounded-lg sm:ml-auto"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="1h" className="rounded-lg">
                Última hora
              </SelectItem>
              <SelectItem value="2h" className="rounded-lg">
                Últimas 2 horas
              </SelectItem>
              <SelectItem value="4h" className="rounded-lg">
                Últimas 4 horas
              </SelectItem>
              <SelectItem value="8h" className="rounded-lg">
                Últimas 8 horas
              </SelectItem>
              <SelectItem value="12h" className="rounded-lg">
                Últimas 12 horas
              </SelectItem>
              <SelectItem value="1d" className="rounded-lg">
                Último dia
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Últimos 7 dias
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Últimos 30 dias
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 md:px-6 md:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto md:h-[500px] h-[300px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={chartConfig.desktop.color}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={chartConfig.desktop.color}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={true} />
            <YAxis
              tickMargin={4}
              minTickGap={32}
              interval={"preserveStartEnd"}
              unit={
                type === "temperature" ? "°C" : type === "humidity" ? "%" : "mm"
              }
            />
            <XAxis
              dataKey="dateTime"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              minTickGap={32}
              interval={"preserveStartEnd"}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={({ active, payload, label }) => (
                <CustomTooltip
                  active={active}
                  payload={payload}
                  label={label}
                />
              )}
            />
            <Area
              dataKey={type}
              type="bumpX"
              fill="url(#fillDesktop)"
              stroke={chartConfig.desktop.color}
              stackId="a"
            />
            <ChartLegend content={renderCustomLegend} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
