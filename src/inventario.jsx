// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

// eslint-disable-next-line react/prop-types
const Inventario = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    createLineChart();
  }, [data]); // Se ejecuta cada vez que `data` cambia

  const createLineChart = () => {
    // eslint-disable-next-line react/prop-types
    if (!data || data.length === 0) return;

    const svgWidth = 950;
    const svgHeight = 600;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    // Limpiar cualquier SVG previo
    d3.select(chartRef.current).selectAll("svg").remove();

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    // eslint-disable-next-line react/prop-types
    x.domain(data.map((d) => d.name));
    y.domain([0, d3.max(data, (d) => d.pv)]);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#00294f") // Cambia el color del texto aquí
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Value");

    g.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.name))
      .attr("y", height) // Inicialmente coloca las barras en la parte inferior del gráfico
      .attr("width", x.bandwidth())
      .attr("height", 0) // Altura inicial 0 para la animación
      .attr("fill", "#00294f") // Cambia el color de las barras aquí

      // Aplicar transición al cambiar la altura y la posición de las barras
      .transition()
      .duration(1000) // Duración de la transición en milisegundos
      .delay((d, i) => i * 100) // Retardo para cada barra
      .attr("y", (d) => y(d.pv))
      .attr("height", (d) => height - y(d.pv));
  };

  return <div ref={chartRef}></div>;
};

export default Inventario;
