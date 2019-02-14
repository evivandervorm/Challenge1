var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["14/02", "15/02", "16/02", "17/02", "18/02", "19/02", "20/02"],
        datasets: [{
            label: "aantal kilometer afgelegd per dag",
            borderColor: 'rgb(74, 68, 147)',
            data: [15, 17, 14, 23, 20, 21, 12],
        }]
    },

    // Configuration options go here
    options: {}
});
