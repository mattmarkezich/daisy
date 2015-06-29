$(function () {
    $('#chart1').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Unemployment Rate'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime',
            minRange: 10 * 52 * 7 * 24 * 3600000 // ten years
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Unemployment Rate',
            pointInterval: 30 * 24 * 3600 * 1000,
            pointStart: Date.UTC(2005, 5, 0),
            data: [
                5.1, 5.0, 5.0, 4.9, 5.0, 5.0, 5.0, 4.9,
                4.7, 4.8, 4.7, 4.7,	4.6, 4.6, 4.7, 4.7, 4.5, 4.4, 4.5, 4.4,
                4.6, 4.5, 4.4, 4.5, 4.4, 4.6, 4.7, 4.6, 4.7, 4.7, 4.7, 5.0,
                5.0, 4.9, 5.1, 5.0, 5.4, 5.6, 5.8, 6.1, 6.1, 6.5, 6.8, 7.3,
                7.8, 8.3, 8.7, 9.0, 9.4, 9.5, 9.5, 9.6, 9.8, 10.0, 9.9, 9.9,
                9.8, 9.8, 9.9, 9.9, 9.6, 9.4, 9.4, 9.5, 9.5, 9.4, 9.8, 9.3,
                9.2, 9.0, 9.0, 9.1, 9.0, 9.1, 9.0, 9.0, 9.0, 8.8, 8.6, 8.5,
                8.3, 8.3, 8.2, 8.2, 8.2, 8.2, 8.2, 8.0, 7.8, 7.8, 7.7, 7.9,
                8.0, 7.7, 7.5, 7.6, 7.5, 7.5, 7.3, 7.2, 7.2, 7.2, 7.0, 6.7,
                6.6, 6.7, 6.6, 6.2, 6.3, 6.1, 6.2, 6.1, 5.9, 5.7, 5.8, 5.6,
                5.7, 5.5, 5.5, 5.4,	5.5
            ]
        }]
    });
});

$(function () {
    $('#chart2').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Employment-Population Ratio'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime',
            minRange: 10 * 52 * 7 * 24 * 3600000 // ten years
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'line',
            name: 'Employment-Population Ratio',
            pointInterval: 30 * 24 * 3600 * 1000,
            pointStart: Date.UTC(2005, 5, 0),
            data: [
                62.8, 62.7, 62.8, 62.9, 62.8, 62.8, 62.7, 62.8, 62.9, 63.0, 63.1, 63.0, 63.1, 63.1, 63.0, 63.1, 63.1,
                63.3, 63.3, 63.4, 63.3, 63.3, 63.3, 63.0, 63.0, 63.0, 62.9, 62.7, 62.9, 62.7, 62.9, 62.7, 62.9, 62.8,
                62.7, 62.7, 62.5, 62.4, 62.2, 62.0, 61.9, 61.7, 61.4, 61.0, 60.6, 60.3, 59.9, 59.8, 59.6, 59.4, 59.3,
                59.1, 58.7, 58.5, 58.6, 58.3, 58.5, 58.5, 58.5, 58.7, 58.6, 58.5, 58.5, 58.6, 58.5, 58.3, 58.2, 58.3,
                58.3, 58.4, 58.4, 58.4, 58.4, 58.2, 58.2, 58.3, 58.4, 58.4, 58.6, 58.6, 58.5, 58.5, 58.6, 58.5, 58.5,
                58.6, 58.5, 58.4, 58.6, 58.8, 58.7, 58.6, 58.6, 58.6, 58.5, 58.6, 58.6, 58.7, 58.7, 58.7, 58.6, 58.2,
                58.6, 58.6, 58.8, 58.8, 59.0, 58.9, 58.9, 59.0, 59.0, 59.0, 59.0, 59.2, 59.2, 59.2, 59.3, 59.3, 59.3,
                59.3, 59.4
            ]
        }]
    });
});

$(function () {
    $('#chart3').highcharts({
        chart: {
            zoomType: 'x'
        },
        title: {
            text: 'Average Hourly Earnings of Production and Nonsupervisory Employees (YoY percent change)'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
        },
        xAxis: {
            type: 'datetime',
            minRange: 10 * 52 * 7 * 24 * 3600000 // ten years
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'line',
            name: 'Average Hourly Earnings',
            pointInterval: 30 * 24 * 3600 * 1000,
            pointStart: Date.UTC(2005, 5, 0),
            data: [
                2.6, 2.6, 2.9, 2.7, 2.6, 3.0, 3.0, 3.1, 3.2, 3.5, 3.6, 3.9, 3.8, 4.0, 3.9, 4.1, 4.2, 4.0, 4.1, 4.2, 4.1,
                4.1, 4.1, 3.8, 4.1, 4.1, 4.1, 4.0, 4.1, 3.8, 3.9, 3.8, 3.9, 3.7, 3.8, 3.7, 3.7, 3.6, 3.7, 3.8, 3.6, 3.9,
                3.9, 3.8, 3.7, 3.7, 3.5, 3.3, 3.1, 2.9, 2.7, 2.6, 2.7, 2.6, 2.7, 2.5, 2.6, 2.5, 2.3, 2.4, 2.6, 2.5, 2.5,
                2.4, 2.3, 2.5, 2.2, 2.1, 2.2, 2.1, 2.1, 2.1, 2.2, 2.0, 2.3, 2.0, 1.9, 1.8, 1.8, 1.8, 1.4, 1.5, 1.8, 1.8,
                1.4, 1.5, 1.3, 1.3, 1.4, 1.3, 1.4, 1.7, 1.9, 2.0, 1.9, 1.7, 1.9, 2.0, 1.9, 2.2, 2.2, 2.3, 2.3, 2.2, 2.3,
                2.5, 2.4, 2.4, 2.4, 2.3, 2.4, 2.5, 2.3, 2.3, 2.3, 1.9, 2.0, 1.7, 1.9, 1.9, 2.0
            ]
        }]
    });
});