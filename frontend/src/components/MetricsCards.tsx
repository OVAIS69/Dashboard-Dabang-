'use client'

import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  Avatar,
} from '@mui/material'
import {
  BarChart as BarChartIcon,
  ShoppingCart as ShoppingCartIcon,
  ShoppingBag as ShoppingBagIcon,
  Person as PersonIcon,
  FileDownload as ExportIcon,
} from '@mui/icons-material'
import { MetricsData } from '@/lib/api'

interface MetricsCardsProps {
  data?: MetricsData | null
}

export function MetricsCards({ data }: MetricsCardsProps) {
  const metrics = data ? [
    {
      title: 'Total Sales',
      value: data.totalSales.value,
      change: data.totalSales.change,
      icon: <BarChartIcon />,
      color: '#ec4899',
    },
    {
      title: 'Total Order',
      value: data.totalOrders.value,
      change: data.totalOrders.change,
      icon: <ShoppingCartIcon />,
      color: '#f97316',
    },
    {
      title: 'Product Sold',
      value: data.productsSold.value,
      change: data.productsSold.change,
      icon: <ShoppingBagIcon />,
      color: '#10b981',
    },
    {
      title: 'New Customers',
      value: data.newCustomers.value,
      change: data.newCustomers.change,
      icon: <PersonIcon />,
      color: '#8b5cf6',
    },
  ] : []
  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
              Today's Sales
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Sales Summary
            </Typography>
          </Box>
          <Button
            startIcon={<ExportIcon />}
            variant="outlined"
            size="small"
            sx={{
              borderColor: '#e5e7eb',
              color: 'text.secondary',
              '&:hover': {
                borderColor: 'primary.main',
                color: 'primary.main',
              },
            }}
          >
            Export
          </Button>
        </Box>

        <Grid container spacing={{ xs: 1, sm: 2 }}>
          {metrics.map((metric, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: metric.color,
                  color: 'white',
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        width: { xs: 24, sm: 32 },
                        height: { xs: 24, sm: 32 },
                        mr: 1,
                      }}
                    >
                      {metric.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                      {metric.value}
                    </Typography>
                  </Box>
                  <Typography variant="caption" sx={{ opacity: 0.9, mb: 0.5, display: 'block' }}>
                    {metric.title}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8, fontSize: '0.7rem' }}>
                    {metric.change}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}
