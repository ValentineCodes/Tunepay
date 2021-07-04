var chartLabels = [
  "May 31",
  "May 22",
  "May 23",
  "May 24",
  "May 25",
  "May 26",
  "May 27",
  "May 28",
  "May 29",
  "May 30",
  "May 31",
  "June 1",
  "June 2",
  "June 3",
  "June 4",
  "June 5",
  "June 6",
  "June 7",
  "June 8",
  "June 9",
  "June 10",
  "June 11",
  "June 12",
  "June 13",
  "June 14",
  "June 15",
  "June 16",
  "June 17",
  "June 18",
];
var transactionAmts = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0,
];

function showLineChart() {
  document.getElementById("chart_type").innerHTML = "Line Chart";
  document.getElementById("line_chart").style.display = "block";
  document.getElementById("bar_chart").style.display = "none";
  document.getElementById("radar_chart").style.display = "none";
}

function showBarChart() {
  document.getElementById("chart_type").innerHTML = "Bar Chart";
  document.getElementById("bar_chart").style.display = "block";
  document.getElementById("line_chart").style.display = "none";
  document.getElementById("radar_chart").style.display = "none";
}

function showRadarChart() {
  document.getElementById("chart_type").innerHTML = "Radar Chart";
  document.getElementById("radar_chart").style.display = "block";
  document.getElementById("bar_chart").style.display = "none";
  document.getElementById("line_chart").style.display = "none";
}

// render chart drawing in canvas

// Line Chart
var ctx = document.getElementById("line_chart").getContext("2d");

// Chart Configurations
var myChart = new Chart(ctx, {
  type: "line", //line, radar, bar
  data: {
    labels: chartLabels,
    datasets: [
      {
        label: "Transaction Amount",
        data: transactionAmts,
        backgroundColor: "#e7f5ed",
        borderColor: "#53ba7e",
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Bar Chart
var ctx = document.getElementById("bar_chart").getContext("2d");
// Chart Configurations
var myChart = new Chart(ctx, {
  type: "bar", //line, radar, bar
  data: {
    labels: chartLabels,
    datasets: [
      {
        label: "Transaction Amount",
        data: transactionAmts,
        backgroundColor: "#e7f5ed",
        borderColor: "#53ba7e",
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Radar Chart
var ctx = document.getElementById("radar_chart").getContext("2d");
// Chart Configurations
var myChart = new Chart(ctx, {
  type: "radar", //line, radar, bar
  data: {
    labels: chartLabels,
    datasets: [
      {
        label: "Transaction Amount",
        data: transactionAmts,
        backgroundColor: "#e7f5ed",
        borderColor: "#53ba7e",
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Success Rate Chart
var ctx = document.getElementById("success_rate_chart").getContext("2d");
// Chart Configurations
var myChart = new Chart(ctx, {
  type: "pie", //line, radar, bar
  data: {
    datasets: [
      {
        label: "Success Rate",
        data: [70, 30],
        backgroundColor: ["#e7f5ed", "#efefef"],
        borderColor: ["#53ba7e", "white"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
