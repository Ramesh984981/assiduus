import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Invoice = () => {
  const svgRef = useRef();

  
  useEffect(() => {
  
    const data = [
      { period: 'Older', value: 50 },
      { period: 'Jan 01-08', value: 30 },
      { period: 'Jan 09-16', value: 45 },
      { period: 'Jan 17-24', value: 60 },
      { period: 'Jan 25-31', value: 20 },
      { period: 'Future', value: 10 },
    ];

    const svg = d3.select(svgRef.current);

    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    

    svg.attr('width', width).attr('height', height);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.period))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value)]).nice().range([innerHeight, 0]);

    g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale));

    g.append('g').attr('class', 'y-axis').call(d3.axisLeft(yScale));

    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.period))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => innerHeight - yScale(d.value));
  }, []);

  

  return (
    <>
    <div className='svg'> </div>
    <div className='heading'>
      <h3>Invoices Owned to You</h3>
      </div>
      <svg ref={svgRef}></svg>
      </>
  );
};

export default Invoice;
