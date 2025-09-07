'use client'

import { Card, CardContent, Typography, Box, Grid } from '@mui/material'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Reality Sales',
      data: [1200, 1400, 1600, 1800, 2000, 2200, 2400],
      backgroundColor: '#10b981',
      borderRadius: 4,
    },
    {
      label: 'Target Sales',
      data: [1500, 1700, 1900, 2100, 2300, 2500, 2700],
      backgroundColor: '#f59e0b',
      borderRadius: 4,
    },
  ],
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
      max: 3000,
      grid: {
        color: '#f3f4f6',
      },
    },
  },
}

export function TargetVsReality() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Target vs Reality
        </Typography>
        <Box sx={{ flexGrow: 1, minHeight: 200, mb: 2 }}>
          <Bar data={data} options={options} />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              p: 2, 
              backgroundColor: '#f3f4f6', 
              borderRadius: 2,
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#e5e7eb',
                transform: 'translateY(-1px)',
              }
            }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  mr: 1.5,
                  boxShadow: '0 2px 4px rgba(16, 185, 129, 0.3)',
                }}
              />
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                  Reality Sales
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#10b981' }}>
                  8,823
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              p: 2, 
              backgroundColor: '#f3f4f6', 
              borderRadius: 2,
              border: '1px solid #e5e7eb',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#e5e7eb',
                transform: 'translateY(-1px)',
              }
            }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: '#f59e0b',
                  borderRadius: '50%',
                  mr: 1.5,
                  boxShadow: '0 2px 4px rgba(245, 158, 11, 0.3)',
                }}
              />
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 500 }}>
                  Target Sales
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f59e0b' }}>
                  12,122
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
