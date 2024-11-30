import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SpiderChart = ({ skills }) => {
  // Prepare labels and data for the chart
  const labels = skills.map(skill => skill.skill_name);
  const dataValues = skills.map(skill => skill.proficiency);

  // Chart data configuration
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Skill Proficiency",
        data: dataValues,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          stepSize: 2,
          font: {
            size: 16,
          },
        },
        pointLabels: {
          font: {
            size: 18, // Adjust font size here for the skill labels (e.g., Java, Python, etc.)
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 24, // Adjust this value to make the legend text larger
          },
        },
        onClick: (e) => e.stopImmediatePropagation(), // Disable interaction with the legend
      },
    },
  };

  return (
    <div style={{ height: "500px", width: "500px" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SpiderChart;