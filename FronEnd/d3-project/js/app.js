  var dataset = [ 5, 10, 15, 20, 25 ];
  var svg = d3.select("body").append("svg");

  svg.attr("width", 500).attr("height", 200);
      
  svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("r", function(d) { return d; })
    .attr("cx", function(d, i) { return (i*50)+25; })
    .attr("cy", 50)
    .attr("fill", "yellow")
    .attr("stroke", "orange")
    .attr("stroke-width", "5" );