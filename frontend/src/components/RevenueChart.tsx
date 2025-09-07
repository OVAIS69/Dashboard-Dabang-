'use client'

import { Card, CardContent, Typography, Box } from '@mui/material'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { RevenueData } from '@/lib/api'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface RevenueChartProps {
  data?: RevenueData | null
}

export function RevenueChart({ data }: RevenueChartProps) {
  const chartData = data ? {
    labels: data.onlineSales.map(item => item.day),
    datasets: [
      {
        label: 'Online Sales',
        data: data.onlineSales.map(item => item.value),
        backgroundColor: '#3b82f6',
        borderRadius: 4,
      },
      {
        label: 'Offline Sales',
        data: data.offlineSales.map(item => item.value),
        backgroundColor: '#10b981',
        borderRadius: 4,
      },
    ],
  } : {
    labels: [],
    datasets: []
  }

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true,
        padding: 20,
      },
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
    },
    y: {
      display: true,
      min: 0,
      max: 30000,
      grid: {
        color: '#f3f4f6',
      },
      ticks: {
        callback: function(value: any) {
          return value / 1000 + 'k'
        },
      },
    },
  },
}

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Total Revenue
        </Typography>
        <Box sx={{ flexGrow: 1, minHeight: 300 }}>
          <Bar data={chartData} options={options} />
        </Box>
      </CardContent>
    </Card>
  )
}
