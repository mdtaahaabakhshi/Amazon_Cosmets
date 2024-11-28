import React from 'react'
import './brand.css'
import Brand1 from '../../assets/glowEssence.webp'
import Brand2 from '../../assets/bold.jpeg'
import Brand3 from '../../assets/naturaluxe.png'
const Brand = () => {

  return (
            <div className="brands-page">
          {/* Header Section */}
          <header className="brands-header">
            <h1 className="brands-title">Discover Our Brands</h1>
            <p className="brands-subtitle">
              we bring you the finest selection of beauty
              brands designed to help you express yourself, feel confident, and
              glow from within.
            </p>
          </header>
    
          {/* Brands Section */}
          <section className="brands-section">
            <div className="brand">
              <img
                src={Brand1}
                alt="Brand 1 Logo"
                className="brand-logo"
              />
              <h2 className="brand-name">Glow Essence</h2>
              <p className="brand-description">
                Discover skincare infused with nature’s best ingredients, designed
                to give you a radiant, healthy glow.
              </p>
            </div>
    
            <div className="brand">
              <img
                src={Brand2}
                alt="Brand 2 Logo"
                className="brand-logo"
              />
              <h2 className="brand-name">Bold Beauty Co.</h2>
              <p className="brand-description">
                Explore a vibrant collection of bold lip colors, eye-catching
                palettes, and more to help you stand out.
              </p>
            </div>
    
            <div className="brand">
              <img
                src={Brand3}
                alt="Brand 3 Logo"
                className="brand-logo"
              />
              <h2 className="brand-name">Natural Luxe</h2>
              <p className="brand-description">
                Luxurious, eco-friendly cosmetics that pamper your skin while
                protecting the planet.
              </p>
            </div>
          </section>
    
          {/* Call to Action */}
          <div className="brands-cta">
            <h3>Ready to Find Your Perfect Match?</h3>
            <p>
              Shop our curated collection of top beauty brands and discover
              products tailored to your unique style and needs.
            </p>
            <button className="cta-button">Explore Now</button>
          </div>
        </div>
      );
    };
    
 


export default Brand