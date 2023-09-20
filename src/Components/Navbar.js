import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  useEffect( () => {
    // Scroll to the top when the component mounts
    window.scrollTo( 0, 0 );
  }, [] );

  const { isDarkMode, toggleTheme } = useTheme();
  const [ isSignedIn, setIsSignedIn ] = useState( false );

  const notify = () => toast.success( "Signed in successfully", { theme: "colored" } );

  const handleSignInOut = () => {
    if ( isSignedIn ) {
      // Handle sign out logic
      setIsSignedIn( false );
    } else {
      // Handle sign in logic
      setIsSignedIn( true );
      notify(); // Notify on sign in
    }
  };

  return (
    <div className={`navbar ${ isDarkMode ? 'dark-mode' : '' }`}>
      <ToastContainer />
      <Link to="/" className="navbar-title">ALEKHYAA</Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/GenerateVideo">Generate Video</Link>
      </div>
      <button className="signin-button" onClick={handleSignInOut}>
        {isSignedIn ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
};

export default Navbar;
