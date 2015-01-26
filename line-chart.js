$(function() {
  var ctx = document.getElementById('chart-canvas').getContext('2d');
  console.log(ctx);
  new Chart(ctx).Line({
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label:                'Revenue',
        fillColor:            'rgba(210,210,210,0.2)',
        strokeColor:          'rgba(210,210,210,1)',
        pointColor:           'rgba(210,210,210,1)',
        pointStrokeColor:     'rgba(255,255,255,1)',
        pointHighlightFill:   'rgba(255,255,255,1)',
        pointHighlightStroke: 'rgba(210,210,210,1)',
        data:                 [100, 110, 130, 160]
      },
      {
        label:                'Active users',
        fillColor:            'rgba(150,190,200,0.2)',
        strokeColor:          'rgba(150,190,200,1)',
        pointColor:           'rgba(150,190,200,1)',
        pointStrokeColor:     'rgba(255,255,255,1)',
        pointHighlightFill:   'rgba(255,255,255,1)',
        pointHighlightStroke: 'rgba(150,190,200,1)',
        data:                 [82, 105, 103, 112]
      }
    ]
  });
});