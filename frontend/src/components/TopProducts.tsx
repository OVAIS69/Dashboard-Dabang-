'use client'

import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  LinearProgress,
} from '@mui/material'
import { TopProductsData } from '@/lib/api'

interface TopProductsProps {
  data?: TopProductsData | null
}

export function TopProducts({ data }: TopProductsProps) {
  const products = data?.products || []
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3, height: '100%' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Top Products
        </Typography>
        <TableContainer sx={{ overflowX: 'auto' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>#</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Popularity</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} hover>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      {product.id.toString().padStart(2, '0')}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      {product.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={product.popularity}
                        sx={{
                          height: { xs: 6, sm: 8 },
                          borderRadius: 4,
                          backgroundColor: '#f3f4f6',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: 'primary.main',
                            borderRadius: 4,
                          },
                        }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'primary.main', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                      {product.sales}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}
