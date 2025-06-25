import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Preloader from '../components/Preloader/Preloader';

const HomePage = () => (
  <>
    <Preloader />
    <Header />
    <HeroSection />
    <Features />
    <Footer />
  </>
);

export default HomePage;