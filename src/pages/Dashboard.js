import React,{useEffect,useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import * as d3 from "d3";
const Dashboard = () => {
  const navigate = useNavigate();
  const svgRef = useRef();
  useEffect(() => {

    
      const data = [{
          name: 'Henil',
          score: Math.floor(Math.random() * 100)
        },
        {
          name: 'Alish',
          score: Math.floor(Math.random() * 100)
        },
        {
          name: 'Deepak',
          score: Math.floor(Math.random() * 100)
        },
        {
          name: 'Aditiya',
          score: Math.floor(Math.random() * 100)
        },
        {
          name: 'Sidharth',
          score: Math.floor(Math.random() * 100)
        },
        {
          name: 'Dasksh',
          score: Math.floor(Math.random() * 100)
        },
        {
          name: 'Vritul',
          score: Math.floor(Math.random() * 100)
        },
        {
          name: 'Jay',
          score: Math.floor(Math.random() * 100)
        },
        {
          name: 'Dhruv',
          score: Math.floor(Math.random() * 100)
        },
      ];
    const width = 900;
    const height = 350;
    const margin = {
      top: 50,
      bottom: 40,
      left: 50,
      right: 50
    };

    const svg = d3.select(svgRef.current)
      .append('svg')
      .attr('width', width - margin.left - margin.right)
      .attr('height', height - margin.top - margin.bottom)
      .attr('overflow','visible')
      .attr("viewBox", [0, 0, width, height]);

    const x = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, width - margin.right])
      .padding(0.5)

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top])

    svg
      .append("g")
      .attr("fill", '#faa914')
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.score))
      .attr('title', (d) => d.score)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.score))
      .attr("width", x.bandwidth());
    
     function yAxis(g) {
       g.attr("transform", `translate(${margin.left}, 0)`)
         .call(d3.axisLeft(y).ticks(null, data.format))
         .attr("font-size", '20px')
     }

     function xAxis(g) {
       g.attr("transform", `translate(0,${height - margin.bottom})`)
         .call(d3.axisBottom(x).tickFormat(i => data[i].name))
         .attr("font-size", '20px')
     }
    
    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);
    svg.node();
    
   }, [svgRef]);
  
  
  const logout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  }


  const refresh = () => {
    window.location.reload();
  }

  return (
    <div className='dashboard__wrapper'>
      <div className='dashboard'>
      <h3>Dashboard</h3>
    
        <button className='logout__button' onClick={ logout}>Logout</button>

      </div>
      <svg ref={svgRef} width="900" height={400} style={{objectFit:'contain'}}></svg>
        <button className='refresh__button' onClick={refresh}>&#x21bb; Refresh</button>
    </div>
  )
}

export default Dashboard