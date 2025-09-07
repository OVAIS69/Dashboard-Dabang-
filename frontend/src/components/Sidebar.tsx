'use client'

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import {
  Dashboard as DashboardIcon,
  Leaderboard as LeaderboardIcon,
  ShoppingCart as OrderIcon,
  ShoppingBag as ProductsIcon,
  Assessment as SalesReportIcon,
  Message as MessagesIcon,
  Settings as SettingsIcon,
  Logout as SignOutIcon,
} from '@mui/icons-material'

const drawerWidth = 280

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, active: true },
  { text: 'Leaderboard', icon: <LeaderboardIcon /> },
  { text: 'Order', icon: <OrderIcon /> },
  { text: 'Products', icon: <ProductsIcon /> },
  { text: 'Sales Report', icon: <SalesReportIcon /> },
  { text: 'Messages', icon: <MessagesIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
  { text: 'Sign Out', icon: <SignOutIcon /> },
]

export function Sidebar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e5e7eb',
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              width: 40,
              height: 40,
              mr: 2,
              fontSize: '1.2rem',
            }}
          >
            D
          </Avatar>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Dabang
          </Typography>
        </Box>

        {/* Navigation Menu */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                sx={{
                  borderRadius: 2,
                  backgroundColor: item.active ? 'primary.main' : 'transparent',
                  color: item.active ? 'white' : 'text.primary',
                  '&:hover': {
                    backgroundColor: item.active ? 'primary.dark' : 'grey.100',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: item.active ? 'white' : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Pro Card */}
        <Card
          sx={{
            mt: 4,
            background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
            color: 'white',
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  width: 32,
                  height: 32,
                  mr: 2,
                }}
              >
                D
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Dabang Pro
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Get access to all features on tetumbas
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
              fullWidth
            >
              Get Pro
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Drawer>
  )
}
