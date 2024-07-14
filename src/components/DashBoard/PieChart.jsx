import React from "react";
import "../../assets/css/DashBoard/pieChart.css"
import Chart from "react-apexcharts";

// Function to generate dates for the past 7 days
const getPastWeekDates = () => {
  const dates = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

// Example of predefined data for the past 7 days
const predefinedData = [45, 60, 75, 30, 50, 90, 80];

export function PieChart() {
  const dates = getPastWeekDates();

  const options = {
    chart: {
      type: 'line',
      height: '100%',
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: 7,
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: dates,
    },
    title: {
      text: 'Points Chart',
      align: 'left',
      style: {
        fontSize: "16px",
        color: '#666'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      },
    },
    markers: {
      size: 4,
      colors: ["#FFA41B"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Value',
      },
    }
  };

  const series = [
    {
      name: 'points',
      data: predefinedData
    }
  ];

  return (
    <div className="line-chart">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
