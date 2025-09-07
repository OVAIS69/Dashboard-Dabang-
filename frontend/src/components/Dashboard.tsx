'use client'

import { Box, Grid, Container, CircularProgress, Alert, Snackbar } from '@mui/material'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { MetricsCards } from './MetricsCards'
import { VisitorInsights } from './VisitorInsights'
import { RevenueChart } from './RevenueChart'
import { CustomerSatisfaction } from './CustomerSatisfaction'
import { TargetVsReality } from './TargetVsReality'
import { TopProducts } from './TopProducts'
import { SalesMapping } from './SalesMapping'
import { VolumeVsService } from './VolumeVsService'
import { useDashboardData } from '@/hooks/useDashboardData'

export function Dashboard() {
  const { data, isLoading, error, clearError } = useDashboardData()

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CircularProgress size={60} />
        </Box>
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Container maxWidth="xl" sx={{ flexGrow: 1, py: { xs: 2, sm: 3 }, px: { xs: 1, sm: 2 } }}>
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            {/* Today's Sales Section */}
            <Grid item xs={12} lg={8}>
              <MetricsCards data={data.metrics} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <VisitorInsights data={data.visitorInsights} />
            </Grid>

            {/* Charts Row */}
            <Grid item xs={12} md={6} lg={4}>
              <RevenueChart data={data.revenue} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CustomerSatisfaction data={data.customerSatisfaction} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TargetVsReality />
            </Grid>

            {/* Bottom Row */}
            <Grid item xs={12} md={6} lg={4}>
              <TopProducts data={data.topProducts} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SalesMapping />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <VolumeVsService />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Error Snackbar */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={clearError}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={clearError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  )
}
