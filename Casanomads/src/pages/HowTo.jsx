import { useState } from 'react';

const videos = [
  {
    title: "Kitchen Tour",
    id: "1o9opTDRvPPCbhLGfJOAS0F4dEsth59h3",
    description: "Get familiar with all the kitchen appliances and their locations",
    duration: "5 min",
    category: "Overview"
  },
  {
    title: "How to Use the Coffee Maker",
    id: "1XrgeMFcvmauRIbyWIEyvLh0UaBUtAdPv",
    description: "Step-by-step guide to brewing the perfect cup of coffee",
    duration: "3 min",
    category: "Appliances"
  },
  {
    title: "How to Use the Cooker",
    id: "1r6_vonL9z38_3ucIOl-_H3914lr-LSPK",
    description: "Master the stovetop cooking with safety tips and techniques",
    duration: "4 min",
    category: "Appliances"
  },
  {
    title: "How to Use the Oven",
    id: "1vIQCv1lKIvH-E_7jZeXjSIBsBvnFW_WP",
    description: "Complete oven guide including temperature settings and safety",
    duration: "6 min",
    category: "Appliances"
  },
  {
    title: "How to Use the Steamer",
    id: "1ZMErmduFe_ml6S9PjSSxvfk5sS6TxWFN",
    description: "Learn how to use the steamer appliance for your clothes",
    duration: "4 min",
    category: "Appliances"
  }
];

function HowTo() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const categories = ['All', ...new Set(videos.map(video => video.category))];
  
  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

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
          How-To Video Guides
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          lineHeight: '1.6',
          margin: '0'
        }}>
          Master your kitchen appliances with our comprehensive video tutorials
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

      {/* Videos Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2.5rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {filteredVideos.map((video, index) => (
          <div 
            key={index}
            onMouseEnter={() => setHoveredVideo(index)}
            onMouseLeave={() => setHoveredVideo(null)}
            style={{
              background: hoveredVideo === index 
                ? 'rgba(255, 255, 255, 0.12)'
                : 'rgba(255, 255, 255, 0.06)',
              padding: '1.5rem',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.4s ease',
              transform: hoveredVideo === index ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredVideo === index 
                ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(160, 204, 75, 0.2)'
                : '0 8px 25px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Video Header */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '0.5rem'
              }}>
                <h3 style={{ 
                  color: '#A0CC4B',
                  margin: '0',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  lineHeight: '1.3'
                }}>
                  {video.title}
                </h3>
                <span style={{
                  background: 'rgba(20, 176, 83, 0.2)',
                  color: '#14B053',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}>
                  {video.duration}
                </span>
              </div>
              <p style={{
                color: '#dddddd',
                margin: '0',
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                {video.description}
              </p>
            </div>

            {/* Video Player */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
            }}>
              <iframe
                src={`https://drive.google.com/file/d/${video.id}/preview`}
                width="100%"
                height="280"
                allow="autoplay"
                allowFullScreen
                title={video.title}
                style={{ 
                  border: 'none',
                  display: 'block'
                }}
                loading="lazy"
              />
              
              {/* Play Overlay */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(160, 204, 75, 0.9)',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: hoveredVideo === index ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none',
                boxShadow: '0 4px 15px rgba(160, 204, 75, 0.4)'
              }}>
                <div style={{
                  width: '0',
                  height: '0',
                  borderLeft: '20px solid white',
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  marginLeft: '4px'
                }} />
              </div>
            </div>

            {/* Category Badge */}
            <div style={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span style={{
                background: 'rgba(160, 204, 75, 0.2)',
                color: '#A0CC4B',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                border: '1px solid rgba(160, 204, 75, 0.3)'
              }}>
                {video.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredVideos.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#999999'
        }}>
          <h3>No videos found in this category</h3>
          <p>Try selecting a different category or "All" to see all videos.</p>
        </div>
      )}
    </div>
  );
}

export default HowTo;
