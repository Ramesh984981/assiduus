import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const svgRef = useRef();

  useEffect(() => {
    const data = [
      { month: 'August', value: 10 },
      { month: 'September', value: 15 },
      { month: 'October', value: 20 },
      { month: 'November', value: 12 },
      { month: 'December', value: 18 },
      { month: 'January', value: 25 },
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const x = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([height, 0]);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.month))
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value))
      .attr('fill', 'steelblue');

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(y));

  }, []);

  return (
    <div>
    <h3>Total cash flow</h3>
    <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
        