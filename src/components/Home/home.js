import React from 'react';
import Profile from './Profile/profile';
import Footer from './footer/footer';
import './home.css';

export default function Home() {
  return (
    <div className='home-container' id = "Home">
      <Profile />
      <Footer />
    </div>
  );
}
