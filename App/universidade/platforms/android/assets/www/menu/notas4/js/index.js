var data = [
    {day: 'M'},
    {day: 'T'},
    {day: 'W'},
    {day: 'T'},
    {day: 'F'},
    {day: 'S'},
    {day: 'S'}
  ];
  var dateFormatter = d3.time.format("%A, %B %d, %Y");
  var mainChart = new RadialProgressChart('.main', {
        diameter: 130,
        series: [
          {labelStart: '\uF106', value: 50},
          {labelStart: '\uF101', value: 50},
          {labelStart: '\uF105', value: 50}
        ]}
  );

  d3.select('.week').selectAll('li')
      .data(data).enter()
      .append('li').on('click', function (d) {
        // Update active class, date and main chart
        d3.selectAll('.circle').classed('active', false);
        d3.select(this).select('.circle').classed('active', true);
        d3.select('.date').text(d.date);
        mainChart.update(d.series);
      })
      .append('div').attr('class', 'circle').text(function (d) {
        return d.day;
      })
      .each(function (d, i) {
        d.date = dateFormatter(getDate(i));
        d.series = [getRandom(), getRandom(), getRandom()];
        new RadialProgressChart(this.parentNode, {
          diameter: 10,
          stroke: {
            width: 6,
            gap: 1
          },
          series: d.series
        });
      });

  // Return some chronological dates
  function getDate(i) {
    var date = new Date('2015-06-16');
    date.setDate(date.getDate() + i);
    return date;
  }

  // Random int between 20-80
  function getRandom() {
    return Math.round(Math.random() * 60) + 20;
  }

  // Select monday by default
  document.querySelector('li').click();