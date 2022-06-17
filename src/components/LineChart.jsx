import React from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement,Legend} from 'chart.js';

ChartJS.register(
    Title, Tooltip, LineElement, Legend
)
function LineChart() {
  return (
    <h1>hello</h1>
    // <Line>LineChart</Line>
  )
}

export default LineChart