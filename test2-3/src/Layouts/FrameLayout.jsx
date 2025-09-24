import * as React from 'react'
import PropTypes from 'prop-types'

// MUI core
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  Box,
  CssBaseline,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
} from '@mui/material'

// Icons
import {
  Menu as MenuIcon,
  ArrowBack as ChevronLeftIcon,
  ArrowForward as ChevronRightIcon,
  ZoomOutMap as FullscreenIcon,
  ZoomInMap as FullscreenExitIcon,
} from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import GroupsIcon from '@mui/icons-material/Groups'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

// Assets
import Logo from '../assets/logo.png'
import Profile from '../assets/react.svg'

// Routing
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: { width: `calc(${theme.spacing(8)} + 1px)` },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#FF9800',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DesktopDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    backgroundColor: '#FFF3E0', // oranye muda untuk drawer
  },
  ...(open && { ...openedMixin(theme), '& .MuiDrawer-paper': openedMixin(theme) }),
  ...(!open && { ...closedMixin(theme), '& .MuiDrawer-paper': closedMixin(theme) }),
}))

function Frame(props) {
  const { window } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [isFullScreen, setIsFullScreen] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (isMobile) setOpen(false)
    else setMobileOpen(false)
  }, [isMobile])

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)
  const handleMobileDrawerToggle = () => setMobileOpen(!mobileOpen)
  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget)
  const handleProfileMenuClose = () => setAnchorEl(null)
  const toggleFullScreen = () => {
    if (!document.fullscreenElement)
      document.documentElement.requestFullscreen().then(() => setIsFullScreen(true))
    else document.exitFullscreen().then(() => setIsFullScreen(false))
  }
  const handleLogout = () => {
    handleProfileMenuClose()
    navigate('/login')
  }

  const container = window !== undefined ? () => window().document.body : undefined

  const navigationLinks = [
    { label: 'Beranda', to: '/', icon: <HomeIcon /> },
    { label: 'Hafalan', to: '/hafalan', icon: <MenuBookIcon /> },
    { label: 'Santri', to: '/santri', icon: <GroupsIcon /> },
    { label: 'Quran', to: '/quran', icon: <LocalLibraryIcon /> },
  ]

  const drawerContent = (
    <div>
      <DrawerHeader>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1, justifyContent: 'center' }}>
          <img src={Logo} alt="Logo" style={{ width: '50px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '6pt', letterSpacing: '3px', lineHeight: '1' }}>
            Hafalan <br /> Al <br /> Qur'an
          </Typography>
          <IconButton sx={{ ml: 4 }} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      </DrawerHeader>
      <Divider />
      <List>
        {navigationLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            style={({ isActive }) => ({
              display: 'block',
              textDecoration: 'none',
              ...(isActive && { backgroundColor: '#FF9800', color: '#fff', borderRadius: '4px' }),
              ...(!isActive && { color: theme.palette.text.primary }),
            })}
          >
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: 'inherit' }}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText primary={link.label} sx={{ opacity: open || mobileOpen ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          {isMobile && <IconButton color="inherit" edge="start" onClick={handleMobileDrawerToggle} sx={{ mr: 2 }}><MenuIcon /></IconButton>}
          {!isMobile && !open && <IconButton color="inherit" edge="start" onClick={handleDrawerOpen} sx={{ mr: 2 }}><MenuIcon /></IconButton>}
          <Typography variant="h6" noWrap component="div">Maqdis Academy</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={toggleFullScreen} color="inherit">{isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}</IconButton>
          <IconButton onClick={handleProfileMenuOpen} color="inherit"><Avatar src={Profile} alt="Profile" /></IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleProfileMenuClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }} PaperProps={{ style: { minWidth: '200px' } }}>
            <MenuItem onClick={handleProfileMenuClose} component={NavLink} to="/settings"><SettingsIcon sx={{ mr: 1 }} /> Pengaturan</MenuItem>
            <MenuItem onClick={handleLogout}><LogoutIcon sx={{ mr: 1 }} /> Keluar</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {isMobile ? (
        <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleMobileDrawerToggle} ModalProps={{ keepMounted: true }} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}>
          {drawerContent}
        </Drawer>
      ) : (
        <DesktopDrawer variant="permanent" open={open} sx={{ display: { xs: 'none', sm: 'block' } }}>
          {drawerContent}
        </DesktopDrawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <DrawerHeader />
        <Box sx={{ flex: 1, p: 4, pt: 3 }}>
          <Outlet />
        </Box>
        <Box component="footer" sx={{ p: 2 }}>
          <Divider />
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
            © {new Date().getFullYear()} KrisnaRizki. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

Frame.propTypes = {
  window: PropTypes.func,
}

export default Frame
