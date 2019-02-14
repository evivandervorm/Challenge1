var ctx = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [ "Water", "Voedsel"],
        datasets: [{
            label: [""],
            backgroundColor: ['rgb(99, 50, 138)', 'rgb(150, 107, 172)'],
            borderColor: 'rgb(54, 189, 218)',
            data: ['50', '75',],
        }]
    },

    // Configuration options go here
    options: {
                scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 100
                            }
                        }]
                },
                legend: {
                    display: false
                },
            }
});
