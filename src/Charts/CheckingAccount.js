import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CheckingAccount = () => {
  const svgRef = useRef();

  useEffect(() => {
    const yValues = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const xValues = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleLinear()
      .domain([Math.min(...xValues), Math.max(...xValues)])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([Math.min(...yValues), Math.max(...yValues)])
      .range([height, 0]);

    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y))
      .curve(d3.curveBasis); 

    const data = xValues.map((x) => {
      return { x, y: 2 + Math.sin((x - xValues[0]) * Math.PI * 0.2) };
    });

    svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

    svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(yScale));
  }, []);

  return (
    <div>
      <h3>Checking Account</h3>
      <div className='button'>
        <button id="manageButton">Manage</button>
        <select>
          <option>January</option>
          <option>feb</option>
          <option>Mar</option>
          <option>April</option>
          <option>May</option>
          <option>june</option>
          <option>july</option>
          <option>August</option>
          <option>september</option>
          <option>october</option>
          <option>November</option>
          <option>December</option>
        </select>
      </div>
      <svg className='checkingAcc' ref={svgRef}></svg>
    </div>
  );
};

export default CheckingAccount;












