var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["05:00", "08:00", "11:00", "14:00", "17:00", "20:00", "23:00", "02:00"],
        datasets: [{
            label: "Temperatuur in Celsius",
            backgroundColor: 'rgb(74, 68, 147)',
            borderColor: 'rgb(74, 68, 147)',
            data: [-110, -70, -20, 17, -15, -30, -80, -135],
        }]
    },

    // Configuration options go here
    options: {}
});
