import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import './Graph.css'

Chart.register(...registerables); // Register Chart.js components

const BarChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['I', 'II', 'III', 'IV'], // X-axis labels (years)
        datasets: [{
          label: 'Completed',
          data: [5, 10, 15, 20, 25], // Y-axis data (units)
          backgroundColor: ' rgb(231, 246, 255) ',
          borderColor: 'rgb(109, 221, 255)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 5 // Set y-axis step size
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.dataset.label + ': ' + tooltipItem.raw; // Show number on hover
              }
            }
          }
        }
      }
    });

    // Clean up chart instance on unmount
    return () => {
      myBarChart.destroy();
    };
  }, []);

  return (
    <div className='gc'>
    <div className='graph-container'>
      <canvas id="myBarChart"></canvas>
    </div>
    </div>
  );
};

export default BarChart;
