'use client'

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Chip,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material'
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Language as LanguageIcon,
  ExpandMore as ExpandMoreIcon,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Leaderboard as LeaderboardIcon,
  ShoppingCart as OrderIcon,
  ShoppingBag as ProductsIcon,
  Assessment as SalesReportIcon,
  Message as MessagesIcon,
  Settings as SettingsIcon,
  Logout as SignOutIcon,
} from '@mui/icons-material'
import { useState } from 'react'

export function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

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

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e7eb',
          color: 'text.primary',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Title */}
          <Typography variant={isMobile ? "h6" : "h4"} sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            Dashboard
          </Typography>

          {/* Search Bar - Hidden on mobile */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, maxWidth: 400, mx: 4 }}>
              <TextField
                fullWidth
                placeholder="Search here..."
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: '#f8fafc',
                    '& fieldset': {
                      borderColor: '#e5e7eb',
                    },
                    '&:hover fieldset': {
                      borderColor: '#d1d5db',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
            </Box>
          )}

          {/* Right Side Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}>
            {/* Language Selector - Hidden on mobile */}
            {!isMobile && (
              <Chip
                icon={<LanguageIcon />}
                label="Eng (US)"
                variant="outlined"
                size="small"
                deleteIcon={<ExpandMoreIcon />}
                onDelete={() => {}}
                sx={{
                  borderColor: '#e5e7eb',
                  '& .MuiChip-label': {
                    fontSize: '0.875rem',
                  },
                }}
              />
            )}

            {/* Notifications */}
            <IconButton sx={{ color: 'text.secondary' }}>
              <NotificationsIcon />
            </IconButton>

            {/* User Profile */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                p: 1,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'grey.100',
                },
              }}
              onClick={handleMenuOpen}
            >
              <Avatar
                sx={{
                  width: { xs: 32, sm: 40 },
                  height: { xs: 32, sm: 40 },
                  bgcolor: 'primary.main',
                }}
              >
                M
              </Avatar>
              {!isMobile && (
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Musfiq
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Admin
                  </Typography>
                </Box>
              )}
              <ExpandMoreIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
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

          {/* Pro Section */}
          <Box
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
              color: 'white',
            }}
          >
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
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
