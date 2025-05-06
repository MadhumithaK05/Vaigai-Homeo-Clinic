import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import About from './About';
import Home from './Home';
import Diseases from './Diseases';
import Gallery from './Gallery';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';
//import logo from './assets/Logo.png';
import logo2 from './assets/logo2.jpeg';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Diseases', path: '/diseases' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Router>
      <AppBar position="static" color="inherit" sx={{ mb: 3 }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo2} alt="Logo" width={110} height={70} style={{ marginRight: 16 }} />
              <h2 style={{ color: "rgb(85, 181, 181)" }}>VAIGAI HOMEO CLINIC</h2>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} style={navStyle}>
                    {link.label}
                  </Link>
                ))}
                <IconButton
                  href="https://wa.me/919444301226"
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsAppIcon color="success" />
                </IconButton>
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <>
                <IconButton edge="end" onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250, p: 2 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.path} component={Link} to={link.path}>
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
            <ListItem button component="a" href="https://wa.me/919444301226" target="_blank">
              <WhatsAppIcon color="success" />
              <Typography sx={{ ml: 1 }}>WhatsApp</Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const navStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
  fontSize: '1rem',
};

export default App;
