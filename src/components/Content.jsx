import React from 'react';
import '../styles/Content.css';
import AboutContent from '../content/About.json';
import ProjectsContent from '../content/Projects.json';
import ProductsContent from '../content/Products.json';
import ServicesContent from '../content/Services.json';
import ContactContent from '../content/Contact.json';

const Content = ({ section }) => {
  const getContent = (sectionName) => {
    switch (sectionName) {
      case 'About':
        return { title: null, intro: null, sections: [] };
      case 'Projects':
        return { title: null, intro: null, sections: [] };
      case 'Products':
        return { title: null, intro: null, sections: [] };
      case 'Services':
        return { title: null, intro: null, sections: [] };
      case 'Contact':
        return { title: null, intro: null, sections: [] };
      default:
        return { title: null, intro: null, sections: [] };
    }
  };

  const contentData = getContent(section);

  return (
    <div className="content">
      {contentData.intro && (
        <p className="content-intro drop-cap">{contentData.intro}</p>
      )}
      
      {contentData.sections && contentData.sections.map((section, index) => (
        <div key={index} className="content-section">
          {section.type === 'text' && (
            <>
              <h3 className="content-heading">{section.heading}</h3>
              <p className="content-text">{section.content}</p>
            </>
          )}
          {section.type === 'image' && (
            <div className="image-container">
              <img 
                src={section.image} 
                alt="Content image"
                className="content-image"
              />
              {section.footnote && (
                <p className="image-footnote">{section.footnote}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Content;
