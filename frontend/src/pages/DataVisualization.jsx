import { useEffect, useState } from "react";
import { getHorror, getPublishers } from "../utility/api-client";
import { BarChart } from "../components/charts/BarChart";

const DataVisualization = () => {
  const [pubData, setPubData] = useState([]);
  const [horData, setHorData] = useState([]);

  const yAccessor = (d) => d._id;
  const xAccessor = (d) => d.count;
  const width = 700;
  const height = 500;
  const margin = { top: 20, left: 200, right: 50, bottom: 35 };

  useEffect(() => {
    getPublishers().then((pubData) => {
      setPubData(pubData);
    });
  }, []);

  useEffect(() => {
    getHorror().then((horData) => {
      setHorData(horData[0].categorizedByPublishers);
    });
  }, []);

  return (
    <div className="collection mt-16 mx-auto max-w-screen-lg pl-4 pr-4">
      <h1 className="mb-8 text-3xl">Data Visualization</h1>

      <h2 className="mb-8 text-2xl">Comics By Publisher</h2>
      <div className="chart mb-16">
        <BarChart
          data={pubData}
          width={width}
          height={height}
          margin={margin}
          xAccessor={xAccessor}
          yAccessor={yAccessor}
        />
      </div>

      <h2 className="mb-8 text-2xl">Comics Labeled as Horror Comics</h2>
      <div className="chart mb-16">
        <BarChart
          data={horData}
          width={width}
          height={height}
          margin={margin}
          xAccessor={xAccessor}
          yAccessor={yAccessor}
        />
      </div>
    </div>
  );
};

export default DataVisualization;
