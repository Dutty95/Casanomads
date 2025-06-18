import React, { useState } from 'react';
import { MapPin, Globe, Instagram, Camera, Clock, Star } from 'lucide-react';

const locations = [
  {
    name: "Nike Art Gallery",
    description: "One of the largest art galleries in West Africa showcasing Nigerian art and culture with over 8,000 artworks.",
    address: "2 Nike Art Gallery Rd, Lekki Phase I, Lagos",
    mapLink: "https://maps.app.goo.gl/2uXEuXZMAZW5Di6UA",
    website: "https://nikeartfoundation.com/",
    instagram: "@nikeartgallery",
    category: "Art & Culture",
    hours: "Daily 9AM - 6PM",
    admission: "₦2,000 - ₦5,000",
    image: "🎨"
  },
  {
    name: "Lekki Conservation Centre",
    description: "Nature reserve with Africa's longest canopy walk, wildlife viewing, and peaceful trails through mangroves.",
    address: "Lekki-Epe Expressway, Lekki, Lagos",
    mapLink: "https://maps.app.goo.gl/1R3Tdw2qYWnxdxDo8",
    website: "https://ncfnigeria.org/",
    instagram: "@lekkiconservationcentre",
    category: "Nature & Wildlife",
    hours: "Daily 9AM - 6PM",
    admission: "₦2,000 - ₦5,000",
    image: "🌿"
  },
  {
    name: "Freedom Park Lagos",
    description: "Former colonial prison transformed into Lagos's premier artistic and recreational space with events and exhibitions.",
    address: "Broad Street, Lagos Island, Lagos",
    mapLink: "https://maps.app.goo.gl/iKhQdQ8DtyaMYffk9",
    website: "https://freedomparklagos.com/",
    instagram: "freedomparklagos",
    category: "Recreation & History",
    hours: "Daily 10AM - 10PM",
    admission: "₦500",
    image: "🏛️"
  },
  {
    name: "John Randle Centre",
    description: "Cultural centre on Lagos Island featuring historical exhibitions, traditional arts, and cultural events.",
    address: "J.K. Randle Centre, Lagos Island, Lagos",
    mapLink: "https://maps.app.goo.gl/Vvswn1mQf5etJXz29",
    website: "https://www.jrandlecentre.com/",
    instagram: "@jrandlecentre",
    category: "Culture & Heritage",
    hours: "Tue-Sun 10AM - 5PM",
    admission: "₦4,000 - ₦10,000",
    image: "🏺"
  },
  {
    name: "Tarkwa Bay Beach",
    description: "Secluded island beach accessible only by boat, perfect for swimming, surfing, and beach relaxation.",
    address: "Tarkwa Bay Island, Lagos",
    mapLink: "https://maps.app.goo.gl/9Y2kwB3Q8R3RaYK59",
    website: null,
    instagram: "@tarkwabay",
    category: "Beach & Water Sports",
    hours: "24/7 (boat access required)",
    admission: "Boat fare ₦2,000-5,000",
    image: "🏖️"
  },
  {
    name: "New Afrika Shrine",
    description: "Iconic music venue and cultural center founded by Fela Kuti's son, featuring live Afrobeat performances.",
    address: "Agidingbi Road, Ikeja, Lagos",
    mapLink: "https://maps.app.goo.gl/6XhWqhsfEUeX9tzL9",
    website: "https://www.felabration.net/",
    instagram: "@newafrikashrines",
    category: "Music & Nightlife",
    hours: "Thu-Sun from 8PM",
    admission: "₦3,000 - ₦10,000",
    image: "🎵"
  },
  {
    name: "Terra Kulture",
    description: "Multi-purpose arts center with galleries, bookstore, restaurant, and regular cultural performances.",
    address: "1376 Tiamiyu Savage Street, Victoria Island, Lagos",
    mapLink: "https://maps.app.goo.gl/nckoHh1VGSy4PEEb8",
    website: "https://terrakulture.com/",
    instagram: "@terrakulture",
    category: "Art & Culture",
    hours: "Mon-Sat 10AM - 8PM",
    admission: "Free (events vary)",
    image: "🎭"
  },
  {
    name: "Lagos Island Market (Balogun Market)",
    description: "One of Nigeria's largest traditional markets offering textiles, crafts, electronics, and authentic local goods.",
    address: "Lagos Island, Lagos",
    mapLink: "https://maps.app.goo.gl/hYCK4BqsUn8ez6V9A",
    website: null,
    instagram: null,
    category: "Shopping & Local Culture",
    hours: "Mon-Sat 8AM - 7PM",
    admission: "Free",
    image: "🛍️"
  },
  {
    name: "Kalakuta Museum",
    description: "Former home of Afrobeat legend Fela Kuti, now a museum preserving his legacy and Nigerian music history.",
    address: "7 Gbemisola Street, Allen Avenue, Ikeja, Lagos",
    mapLink: "https://maps.app.goo.gl/oYGbnmVtNH79bUjT6",
    website: "https://kalakutamuseum.com/",
    instagram: "@kalakutamuseums",
    category: "Music & History",
    hours: "Tue-Sun 10AM - 6PM",
    admission: "₦2,000-₦5,000",
    image: "🎼"
  },
  {
    name: "Elegushi Beach",
    description: "Popular private beach resort with water sports, horse riding, ATV rides, and beachside dining.",
    address: "Lekki-Epe Expressway, Lekki, Lagos",
    mapLink: "https://maps.app.goo.gl/z91EBZ1prVaPcam18",
    website: null,
    instagram: "@elegushibeachlagos",
    category: "Beach & Recreation",
    hours: "Daily 9AM - 9PM",
    admission: "₦1,500 - ₦3,000",
    image: "🌊"
  },
  {
    name: "National Theatre Lagos",
    description: "Iconic architectural landmark hosting theatrical performances, concerts, and cultural exhibitions.",
    address: "National Theatre Nigeria, Iganmu, Lagos",
    mapLink: "https://maps.app.goo.gl/8zUurVQweC3at6U99",
    website: "https://nationaltheatre.gov.ng/",
    instagram: "@nationaltheatrenigeria",
    category: "Theatre & Performing Arts",
    hours: "Mon-Sat 9AM - 6PM (event dependent)",
    admission: "Varies by event",
    image: "🎪"
  },
  {
    name: "Lufasi Nature Park",
    description: "Eco-tourism destination with nature walks, bird watching, camping, and environmental education programs.",
    address: "Majek 1st Gate, KM 41, Lekki-Epe Expressway, Lagos, Nigeria",
    mapLink: "https://maps.app.goo.gl/2rJNeVkLFYjTHYgP9",
    website: "https://lufasi.org/",
    instagram: "@lufasipark",
    category: "Nature & Eco-tourism",
    hours: "Mondays-Saturday 9AM - 6PM",
    admission: "₦2,500",
    image: "🦅"
  }
];

function Experience() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const categories = ['All', ...new Set(locations.map(loc => loc.category))];
  
  const filteredLocations = selectedCategory === 'All' 
    ? locations 
    : locations.filter(location => location.category === selectedCategory);

  return (
    <div style={{ 
      color: '#ffffff',
      padding: '2rem',
      minHeight: '100vh',
      background: '#0d0d0d', // deep black bg
      fontFamily: 'Poppins, sans-serif'
    }}>
      {/* Header Section */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '3rem',
        maxWidth: '800px',
        margin: '0 auto 3rem auto'
      }}>
        <h1 style={{ 
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #A0CC4B, #14B053)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Experience Lagos
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          lineHeight: '1.6',
          margin: '0'
        }}>
          Discover the vibrant culture, rich history, and exciting attractions of Nigeria's most dynamic city
        </p>
      </div>

      {/* Category Filter */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '0.8rem 1.5rem',
              background: selectedCategory === category 
                ? 'linear-gradient(45deg, #14B053, #A0CC4B)' 
                : 'rgba(255, 255, 255, 0.08)',
              color: selectedCategory === category ? '#ffffff' : '#A0CC4B',
              border: selectedCategory === category ? 'none' : '2px solid #14B053',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              transform: selectedCategory === category ? 'scale(1.05)' : 'scale(1)',
              boxShadow: selectedCategory === category 
                ? '0 8px 25px rgba(20, 176, 83, 0.3)'
                : 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Locations Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2.5rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {filteredLocations.map((location, index) => (
          <div 
            key={index}
            onMouseEnter={() => setHoveredLocation(index)}
            onMouseLeave={() => setHoveredLocation(null)}
            style={{
              background: hoveredLocation === index 
                ? 'rgba(255, 255, 255, 0.12)'
                : 'rgba(255, 255, 255, 0.06)',
              padding: '1.5rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.4s ease',
              transform: hoveredLocation === index ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredLocation === index 
                ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(160, 204, 75, 0.2)'
                : '0 8px 25px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Location Header */}
            <div style={{ 
              textAlign: 'center',
              marginBottom: '1.5rem' 
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>
                {location.image}
              </div>
              <h3 style={{ 
                color: '#A0CC4B',
                margin: '0 0 0.5rem 0',
                fontSize: '1.4rem',
                fontWeight: '700',
                lineHeight: '1.3'
              }}>
                {location.name}
              </h3>
              <span style={{
                background: 'rgba(20, 176, 83, 0.2)',
                color: '#14B053',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                border: '1px solid rgba(20, 176, 83, 0.3)'
              }}>
                {location.category}
              </span>
            </div>

            {/* Description */}
            <p style={{
              color: '#dddddd',
              margin: '0 0 1.5rem 0',
              fontSize: '0.95rem',
              lineHeight: '1.5',
              textAlign: 'center'
            }}>
              {location.description}
            </p>

            {/* Location Details */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '1rem',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '0.8rem',
                fontSize: '0.9rem',
                color: '#cccccc'
              }}>
                <Clock style={{ width: '16px', height: '16px', color: '#A0CC4B' }} />
                <span>{location.hours}</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: '#cccccc'
              }}>
                <Star style={{ width: '16px', height: '16px', color: '#A0CC4B' }} />
                <span>Admission: {location.admission}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <a
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(45deg, #1e40af, #3b82f6)',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                }}
              >
                <MapPin style={{ width: '16px', height: '16px' }} />
                Map
              </a>
              
              {location.website && (
                <a
                  href={location.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'linear-gradient(45deg, #14B053, #A0CC4B)',
                    color: 'white',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)',
                    boxShadow: '0 4px 15px rgba(20, 176, 83, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 6px 20px rgba(20, 176, 83, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(20, 176, 83, 0.3)';
                  }}
                >
                  <Globe style={{ width: '16px', height: '16px' }} />
                  Website
                </a>
              )}
              
              {location.instagram && (
                <a
                  href={`https://instagram.com/${location.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'linear-gradient(45deg, #e91e63, #f06292)',
                    color: 'white',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)',
                    boxShadow: '0 4px 15px rgba(233, 30, 99, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 6px 20px rgba(233, 30, 99, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(233, 30, 99, 0.3)';
                  }}
                >
                  <Instagram style={{ width: '16px', height: '16px' }} />
                  Instagram
                </a>
              )}
            </div>

            {/* Address */}
            <div style={{
              textAlign: 'center',
              fontSize: '0.8rem',
              color: '#999999',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}>
                <MapPin style={{ width: '14px', height: '14px', color: '#A0CC4B' }} />
                <span>{location.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Travel Tips Section */}
      <div style={{
        marginTop: '4rem',
        textAlign: 'center'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          padding: '2rem',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          maxWidth: '800px',
          margin: '0 auto',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            color: '#A0CC4B',
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Explore Lagos!
          </h2>
          <p style={{
            color: '#dddddd',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            Lagos offers incredible diversity from pristine beaches to world-class art galleries. 
            Most attractions are accessible by car or ride-sharing services.
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
            fontSize: '0.9rem',
            color: '#cccccc'
          }}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Camera style={{ width: '16px', height: '16px', color: '#A0CC4B' }} />
              Don't forget your camera!
            </span>
            <span style={{ color: '#666' }}>•</span>
            <span>Best time: November - March</span>
            <span style={{ color: '#666' }}>•</span>
            <span>Currency: Nigerian Naira (₦)</span>
          </div>
        </div>
      </div>

      {/* No Results Message */}
      {filteredLocations.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#999999'
        }}>
          <h3>No locations found in this category</h3>
          <p>Try selecting a different category or "All" to see all locations.</p>
        </div>
      )}
    </div>
  );
}

export default Experience;