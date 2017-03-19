// filler code for now from http://jvectormap.com/examples/markers-world/
$(function(){
  $('#world-map-markers').vectorMap({
    map: 'world_mill',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.4,
    hoverColor: false,
    markerStyle: {
      initial: {
        fill: '#2980B9',
        stroke: '#F8F9F9'
      }
    },
	regionStyle: {
	  initial: {
		fill: '#566573',
		"fill-opacity": 1,
		stroke: 'none',
		"stroke-width": 0,
		"stroke-opacity": 1
	  },
	  hover: {
		"fill-opacity": 0.8,
		cursor: 'pointer'
	  }
	},
    backgroundColor: '#F2F3F4',
    markers: [
      {latLng: [41.90, 12.45], name: 'Vatican City'},
      {latLng: [43.73, 7.41], name: 'Monaco'},
      {latLng: [-0.52, 166.93], name: 'Nauru'},
      {latLng: [-8.51, 179.21], name: 'Tuvalu'}
    ]
  });
});