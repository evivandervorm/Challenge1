var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Vis", "Vlees", "Groente", "Aardappelen"],
        datasets: [{
            label: "Voorraden voedsel",
            backgroundColor: ['rgb(180, 142, 192)', 'rgb(150, 107, 172)', 'rgb(126, 83, 157)','rgb(99, 50, 138)'],
            borderColor: ['rgb(180, 142, 192)', 'rgb(150, 107, 172)', 'rgb(126, 83, 157)','rgb(99, 50, 138)'],
            data: [45, 30, 20, 33],
        }]
    },

    // Configuration options go here
    options: {}
});
