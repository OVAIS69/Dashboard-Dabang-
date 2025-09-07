'use client'

import { Card, CardContent, Typography, Box } from '@mui/material'

export function SalesMapping() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Sales Mapping by Country
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            borderRadius: 2,
            border: '2px dashed #d1d5db',
            minHeight: 200,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* World Map Placeholder with better styling */}
          <Box sx={{ textAlign: 'center', zIndex: 1 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 50%, #81d4fa 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
            >
              <Typography variant="h2" sx={{ color: '#0277bd' }}>
                🌍
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500, mb: 1 }}>
              World Map Visualization
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
              Interactive map showing sales distribution by country
            </Typography>
          </Box>
          
          {/* Decorative background elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              left: 20,
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#f97316',
              opacity: 0.3,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 40,
              right: 30,
              width: 15,
              height: 15,
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              opacity: 0.3,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 30,
              left: 40,
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#8b5cf6',
              opacity: 0.3,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              width: 18,
              height: 18,
              borderRadius: '50%',
              backgroundColor: '#10b981',
              opacity: 0.3,
            }}
          />
        </Box>
        
        {/* Enhanced Legend */}
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {[
            { country: 'USA', color: '#f97316' },
            { country: 'Europe', color: '#3b82f6' },
            { country: 'China', color: '#8b5cf6' },
            { country: 'Asia', color: '#10b981' },
          ].map((item) => (
            <Box
              key={item.country}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                px: 1.5,
                py: 0.75,
                backgroundColor: '#f3f4f6',
                borderRadius: 2,
                border: '1px solid #e5e7eb',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#e5e7eb',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: item.color,
                  borderRadius: '50%',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              />
              <Typography variant="caption" sx={{ fontSize: '0.75rem', fontWeight: 500, color: 'text.secondary' }}>
                {item.country}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
