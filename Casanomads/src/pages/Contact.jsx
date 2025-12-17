import React, { useState } from 'react';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "👩‍💼",
    bio: "Passionate about creating unique travel experiences across Nigeria"
  },
  {
    name: "Michael Adebayo",
    role: "Travel Consultant",
    image: "👨‍💻",
    bio: "Expert in Lagos attractions and cultural experiences"
  },
  {
    name: "Fatima Ibrahim",
    role: "Customer Relations",
    image: "👩‍🎓",
    bio: "Dedicated to ensuring every guest has an amazing stay"
  }
];

const officeImages = [
  {
    title: "Our Modern Office Space",
    image: "🏢",
    description: "Located in the heart of Lagos"
  },
  {
    title: "Team Meeting Room",
    image: "🏛️",
    description: "Where we plan your perfect experiences"
  },
  {
    title: "Reception Area",
    image: "🏨",
    description: "Welcoming space for our valued clients"
  }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % officeImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + officeImages.length) % officeImages.length);
  };

  return (
    <div style={{ 
      color: '#ffffff',
      padding: '2rem',
      minHeight: '100vh',
      background: '#0d0d0d',
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
          Contact The Casanomads Company
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          lineHeight: '1.6',
          margin: '0 0 2rem 0'
        }}>
          We value your feedback and strive to provide excellent customer service. Don't hesitate to reach out – we're here to help!
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          fontSize: '2.5rem' 
        }}>
          <span>🏨</span>
          <span>📩</span>
          <span>📞</span>
        </div>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Contact Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '2rem',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#A0CC4B',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
              <span>📝</span> Send us a Message
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#A0CC4B' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(160, 204, 75, 0.3)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="Your full name"
                    onFocus={(e) => e.target.style.borderColor = '#14B053'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(160, 204, 75, 0.3)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#A0CC4B' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(160, 204, 75, 0.3)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="Your phone number"
                    onFocus={(e) => e.target.style.borderColor = '#14B053'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(160, 204, 75, 0.3)'}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#A0CC4B' }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(160, 204, 75, 0.3)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="your.email@example.com"
                  onFocus={(e) => e.target.style.borderColor = '#14B053'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(160, 204, 75, 0.3)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#A0CC4B' }}>
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(160, 204, 75, 0.3)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#14B053'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(160, 204, 75, 0.3)'}
                >
                  <option value="" style={{ background: '#1a1a1a', color: '#ffffff' }}>Select a subject</option>
                  <option value="booking" style={{ background: '#1a1a1a', color: '#ffffff' }}>Booking Inquiry</option>
                  <option value="general" style={{ background: '#1a1a1a', color: '#ffffff' }}>General Question</option>
                  <option value="support" style={{ background: '#1a1a1a', color: '#ffffff' }}>Customer Support</option>
                  <option value="partnership" style={{ background: '#1a1a1a', color: '#ffffff' }}>Partnership</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#A0CC4B' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(160, 204, 75, 0.3)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Tell us about your experience..."
                  onFocus={(e) => e.target.style.borderColor = '#14B053'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(160, 204, 75, 0.3)'}
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  background: 'linear-gradient(45deg, #14B053, #A0CC4B)',
                  color: '#ffffff',
                  fontWeight: '700',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(20, 176, 83, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(20, 176, 83, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(20, 176, 83, 0.3)';
                }}
              >
                Send Message 🚀
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '2rem',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#A0CC4B',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              📍 Get in Touch
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'rgba(160, 204, 75, 0.1)',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(160, 204, 75, 0.2)'
              }}>
                <h3 style={{ color: '#A0CC4B', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>📧 Email</h3>
                <p style={{ color: '#dddddd', margin: '0', fontSize: '0.95rem' }}>info@thecasanomads.com</p>
              </div>

              <div style={{
                background: 'rgba(160, 204, 75, 0.1)',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(160, 204, 75, 0.2)'
              }}>
                <h3 style={{ color: '#A0CC4B', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>📱 Phone</h3>
                <p style={{ color: '#dddddd', margin: '0', fontSize: '0.95rem' }}>+234 8087476697</p>
              </div>

              <div style={{
                background: 'rgba(160, 204, 75, 0.1)',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(160, 204, 75, 0.2)'
              }}>
                <h3 style={{ color: '#A0CC4B', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>🏢 Office</h3>
                <p style={{ color: '#dddddd', margin: '0', fontSize: '0.95rem' }}>28 Dele Ogunbowale Crescent, QMB Builder's Mart Road, Lekki, Lagos.</p>
              </div>

              <div style={{
                background: 'rgba(160, 204, 75, 0.1)',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(160, 204, 75, 0.2)'
              }}>
                <h3 style={{ color: '#A0CC4B', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>⏰ Hours</h3>
                <p style={{ color: '#dddddd', margin: '0', fontSize: '0.95rem' }}>
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat - Sun: 12:00 PM - 6:00 PM
                </p>
              </div>

              {/* Official Website */}
              <div style={{
                background: 'rgba(160, 204, 75, 0.1)',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(160, 204, 75, 0.2)'
              }}>
                <h3 style={{ color: '#A0CC4B', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>🌐 Book Direct</h3>
                <a 
                  href="https://thecasanomads.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#14B053', 
                    textDecoration: 'none', 
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#A0CC4B'}
                  onMouseLeave={(e) => e.target.style.color = '#14B053'}
                >
                  www.thecasanomads.com
                </a>
              </div>

              {/* Social Media Section */}
              <div style={{
                background: 'rgba(160, 204, 75, 0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(160, 204, 75, 0.2)'
              }}>
                <h3 style={{ 
                  color: '#A0CC4B', 
                  margin: '0 0 1rem 0', 
                  fontSize: '1.1rem',
                  textAlign: 'center'
                }}>
                  🌟 Follow Us
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '0.8rem'
                }}>
                  <a
                    href="https://www.instagram.com/casanomads"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '0.8rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: '#ffffff',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.background = 'rgba(225, 48, 108, 0.15)';
                      e.target.style.borderColor = 'rgba(225, 48, 108, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <span style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>📸</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>Instagram</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@Casanomads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '0.8rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: '#ffffff',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.background = 'rgba(255, 0, 0, 0.15)';
                      e.target.style.borderColor = 'rgba(255, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <span style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>🎥</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>YouTube</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/casa-nomads-6572bb205"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '0.8rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      color: '#ffffff',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      gridColumn: 'span 2'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.background = 'rgba(0, 119, 181, 0.15)';
                      e.target.style.borderColor = 'rgba(0, 119, 181, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <span style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>💼</span>
                    <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;