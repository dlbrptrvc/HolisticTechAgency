import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import './styles/App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Carousel />
      {/* App content will go here */}
    </div>
  );
}
