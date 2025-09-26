import React, { useEffect, useRef, useState } from 'react';
import '../styles/Content.css';
import HomeData from '../content/Home.json';
import ServicesData from '../content/Services.json';
import ContactData from '../content/Contact.json';
import ProductsData from '../content/Products.json';
import ProjectsData from '../content/Projects.json';


const Content = ({ section }) => {
  const renderContent = () => {
    switch (section) {
      case 'Home':
        return (
          <div className="content-container">
            {HomeData.sections.map((sectionData, index) => (
              <div key={index} className="section-container">
                <div className="two-columns">
                  <div className="column-left">
                    <h2 className="section-heading">
                      {sectionData.heading.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < sectionData.heading.split('\n').length - 1 && <br/>}
                        </React.Fragment>
                      ))}
                    </h2>
                  </div>
                  <div className="column-right">
                    <p className="section-content">{sectionData.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'Services':
        return (
          <div className="content-container">
            {ServicesData.sections.map((sectionData, index) => (
              <div key={index} className="section-container">
                <div className="regular">
                  <h3>{sectionData.heading}</h3>
                  <p>{sectionData.content}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'Contact':
        return (
          <div className="content-container">
            {ContactData.sections.map((sectionData, index) => (
              <div key={index} className="section-container">
                <div className="regular">
                  <h3>{sectionData.heading}</h3>
                  <p>{sectionData.content}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'Products':
        return (
          <div className="content-container">
            {ProductsData.sections.map((sectionData, index) => (
              <div key={index} className="section-container">
                <div className="regular">
                  <h3>{sectionData.heading}</h3>
                  <p>{sectionData.content}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'Projects':
        return (
          <div className="content-container">
            {ProjectsData.sections.map((sectionData, index) => (
              <div key={index} className="section-container">
                <div className="regular">
                  <h3>{sectionData.heading}</h3>
                  <p>{sectionData.content}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return (
          <div className="content-container">
            <div className="section-container">
              <div className="regular">
                <p>Content for {section} section coming soon.</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="content">
      {renderContent()}
    </div>
  );
};

export default Content;