// import { scaleLinear, scaleBand } from 'd3'
import * as d3 from "d3";
import PropTypes from "prop-types";

function LeftAxis({ yScale, margin }) {
  return (
    <g transform={`translate(0, ${margin.top})`}>
      {yScale.domain().map((domain) => (
        <g key={domain}>
          <text
            fontWeight="bold"
            dominantBaseline="middle"
            transform={`translate(0, ${
              yScale(domain) + yScale.bandwidth() / 2
            })`}
          >
            {domain}
          </text>
        </g>
      ))}
    </g>
  );
}

function BottomAxis({ xScale, boundedHeight, margin }) {
  return (
    <g transform={`translate(${margin.left}, ${boundedHeight + margin.top})`}>
      {xScale.ticks().map((tick) => (
        <g key={tick}>
          <rect height="15" width="3" x={xScale(tick)} />
          <text
            height="15"
            y="30"
            textAnchor="middle"
            transform={`translate(${xScale(tick) + 1.5})`}
          >
            {tick}
          </text>
        </g>
      ))}
    </g>
  );
}

// TODO: Provide reasonable defaults for all props
export function BarChart({
  data,
  width,
  height,
  margin,
  yAccessor,
  xAccessor,
}) {
  const boundedHeight = height - margin.bottom - margin.top;
  const boundedWidth = width - margin.right - margin.left;
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, xAccessor)])
    .nice()
    .range([0, boundedWidth]);

  // console.log(xScale.domain());
  // console.log(xScale.ticks());
  // console.log("221 xScale", xScale(221));
  // console.log("240 xScale", xScale(240));

  const yScale = d3
    .scaleBand()
    .domain(data.map(yAccessor))
    .range([boundedHeight, 0])
    .padding(0.1);

  const colorScale = d3
    .scaleOrdinal()
    .domain(data.map(yAccessor))
    .range(["#005f73", "#0a9396", "#ee9b00", "#ae2012"]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      // viewBox={`0 0 ${width + 10} ${height + 10}`}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {data.map((datum) => (
          <g
            key={yAccessor(datum)}
            transform={`translate(0, ${yScale(yAccessor(datum))})`}
            fill={colorScale(yAccessor(datum))}
          >
            <rect
              // fill={colorScale(yAccessor(datum))}
              width={xScale(xAccessor(datum))}
              height={yScale.bandwidth()}
            />
            <text
              // fill={colorScale(yAccessor(datum))}
              fontWeight="bolder"
              dominantBaseline="hanging"
              transform={`translate(${xScale(xAccessor(datum)) + 4})`}
            >
              {xAccessor(datum)}
            </text>
          </g>
        ))}
      </g>
      <LeftAxis yScale={yScale} margin={margin} />
      <BottomAxis
        xScale={xScale}
        boundedHeight={boundedHeight}
        margin={margin}
      />
    </svg>
  );
}

LeftAxis.propTypes = {
  yScale: PropTypes.func,
  margin: PropTypes.object,
};

BottomAxis.propTypes = {
  xScale: PropTypes.func,
  boundedHeight: PropTypes.number,
  margin: PropTypes.object,
};

BarChart.propTypes = {
  data: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
  yAccessor: PropTypes.func,
  xAccessor: PropTypes.func,
};
