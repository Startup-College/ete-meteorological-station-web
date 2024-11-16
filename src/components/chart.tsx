"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  ChartTooltipContent,
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

export function Chart({ data, station, type }: ChartProps) {
  const [timeRange, setTimeRange] = React.useState("90d");

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
  const filteredData = data.filter((reading: Readings) => {
    const date = new Date(reading.dateTime);
    const referenceDate = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });
  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Estação - {station.name.split("-").join(" ")}</CardTitle>
          <CardDescription>
            Dados dos últimos 3 meses de monitoramento
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[200px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Últimos três meses
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Últimos 30 dias
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Últimos 7 dias
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
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
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="dateTime"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              interval={"preserveStartEnd"}
              dy={4}
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
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey={type}
              type="natural"
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
