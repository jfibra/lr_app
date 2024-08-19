// src/components/Header.js
import React from 'react';
import { Image } from 'react-native';

// Import your logo image
import LogoImage from '../../assets/images/logo.png'; // Replace with the actual path to your logo

const Header = () => {
  return (
    <Image
      source={LogoImage}
      style={{ width: 100, height: 20, resizeMode: 'contain' }}
    />
  );
};

export default Header;
