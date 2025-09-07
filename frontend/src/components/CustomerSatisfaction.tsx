'use client'

import { Card, CardContent, Typography, Box, Grid } from '@mui/material'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { CustomerSatisfactionData } from '@/lib/api'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface CustomerSatisfactionProps {
  data?: CustomerSatisfactionData | null
}

export function CustomerSatisfaction({ data }: CustomerSatisfactionProps) {
  const chartData = data ? {
    labels: data.lastMonth.map(item => item.week),
    datasets: [
      {
        label: 'Last Month',
        data: data.lastMonth.map(item => item.value),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'This Month',
        data: data.thisMonth.map(item => item.value),
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
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
      min: 2000,
      max: 5000,
      grid: {
        color: '#f3f4f6',
      },
      ticks: {
        callback: function(value: any) {
          return '$' + value.toLocaleString()
        },
      },
    },
  },
  elements: {
    point: {
      radius: 4,
      hoverRadius: 6,
    },
  },
}

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Customer Satisfaction
        </Typography>
        <Box sx={{ flexGrow: 1, minHeight: 200, mb: 2 }}>
          <Line data={chartData} options={options} />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f3f4f6', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: '#3b82f6', fontWeight: 'bold' }}>
                Last Month
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                ${data?.summary.lastMonthTotal.toLocaleString() || '3,004'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f3f4f6', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ color: '#10b981', fontWeight: 'bold' }}>
                This Month
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                ${data?.summary.thisMonthTotal.toLocaleString() || '4,504'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
