import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import Content from './components/Content';
import './styles/App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Carousel />
      <Content section="About" />
      {/* App content will go here */}
    </div>
  );
}
