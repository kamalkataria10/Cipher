import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "../App.css";
import data from "../Commit";

const Heatmap = () => {
  const classForValue = (value) => {
    return value ? `color-scale-1` : "color-scale-0";
  };

  const tooltipDataAttrs = (value) => {
    return value ? { "data-tip": `${value.date}: ${value.value} units` } : null;
  };
  return (
    <div className=" px-10">
      <div className="flex justify-between mb-5">
        <h2 className="uppercase font-semibold text-lg leading-6">
          cipher graph
        </h2>
      </div>
      <div className="">
        <CalendarHeatmap
          startDate={new Date("2022-04-09")}
          endDate={new Date("2023-04-10")}
          values={data}
          showWeekdayLabels={true}
          titleForValue={(value) =>
            value ? `Value on ${value.date}: ${value.value}` : "No data"
          }
          classForValue={classForValue}
          tooltipDataAttrs={tooltipDataAttrs}
        />
      </div>
    </div>
  );
};

export default Heatmap;
