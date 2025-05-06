import React from 'react';
import './style.css';
import { IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Diseases', path: '/diseases' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
];
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <p>&copy; {new Date().getFullYear()} Dr. Kannan Homeopathy Clinic. All rights reserved.</p>
                <p>
                    📍 Old Number 26/1, New Number 92, Dr Ramaswamy Salai, Landmark: Opposite Amman Koil, Chennai - 600078, Tamil Nadu, India
                </p>
                <p>📞 +91-9444301226</p>
                <p>
                    <IconButton
                        href="https://wa.me/919444301226"
                        target="_blank"
                        rel="noopener"
                    >
                        <WhatsAppIcon color="success" />
                    </IconButton>
                    For Appoinment
                </p>
            </div>
            <div className="footer-links">
                {navLinks.map((link) => (
                    <Link key={link.path} to={link.path}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </footer>
    );
};


