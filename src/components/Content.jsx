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
        return AboutContent;
      case 'Projects':
        return ProjectsContent;
      case 'Products':
        return ProductsContent;
      case 'Services':
        return ServicesContent;
      case 'Contact':
        return ContactContent;
      default:
        return { title: '', content: 'Content not found.' };
    }
  };

  const contentData = getContent(section);

  return (
    <section className="content-section unselectable">
      <div>
        <h2 className="content-title">{contentData.title}</h2>
        
        {contentData.intro && (
          <p className="content-intro">{contentData.intro}</p>
        )}
        
        {contentData.sections && contentData.sections.map((section, index) => (
          <div key={index}>
            {section.type === 'text' && (
              <>
                <h3 className="content-heading">{section.heading}</h3>
                <p className="content-text">{section.content}</p>
              </>
            )}
            {section.type === 'image' && (
              <div className="newspaper-image">
                <img 
                  src={section.image} 
                  alt="Content image"
                  className="image"
                />
                {section.footnote && (
                  <p className="footnote">{section.footnote}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
