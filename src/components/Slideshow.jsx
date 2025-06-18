import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sample1 from '../assets/Sample1.jpg';
import sample2 from '../assets/Sample2.jpg';
import sample3 from '../assets/Sample3.jpg';
import sample4 from '../assets/Sample4.jpg';
import sample5 from '../assets/Sample5.jpg';
import sample6 from '../assets/Sample6.jpg';
import sample7 from '../assets/Sample7.jpg';
import sample8 from '../assets/Sample8.jpg';

const images = [
  { src: sample1, alt: "Sample 1", caption: "Beautiful Destination" },
  { src: sample2, alt: "Sample 2", caption: "Amazing Experience" },
  { src: sample3, alt: "Sample 3", caption: "Stunning Sight" },
  { src: sample4, alt: "Sample 4", caption: "Incredible Journey" },
  { src: sample5, alt: "Sample 5", caption: "Perfect Adventure" },
  { src: sample6, alt: "Sample 6", caption: "Memorable Moment" },
  { src: sample7, alt: "Sample 7", caption: "Breathtaking View" },
  { src: sample8, alt: "Sample 8", caption: "Unforgettable Trip" }
];

function Slideshow() {
  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '1200px', 
      margin: '0 auto',
      padding: '20px' 
    }}>
      <div style={{
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 25px rgba(0, 0, 0, 0.1)',
        overflow: 'visible',
        background: '',
        padding: '10px',
        transform: 'translateY(-5px)',
        transition: 'all 0.3s ease'
      }}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          transitionTime={1000}
          animationHandler="random"
          swipeable={true}
          emulateTouch={true}
          showArrows={true}
          showIndicators={true}
          style={{ 
            borderRadius: '15px',
            overflow: 'hidden'
          }}
        >
          {images.map((img, index) => (
            <div key={index} style={{ 
              position: 'relative',
              width: '100%', 
              height: '500px',
              borderRadius: '15px',
              overflow: 'hidden'
            }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '15px'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                color: 'white',
                padding: '30px 20px 20px',
                textAlign: 'center'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '18px',
                  fontWeight: '600',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '0.5px'
                }}>
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      
      <style jsx>{`
        .carousel .slide {
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }
        
        .carousel .slide.selected {
          opacity: 1;
        }
        
        .carousel .control-arrow {
          background: rgba(255, 255, 255, 0.8) !important;
          border-radius: 50% !important;
          width: 50px !important;
          height: 50px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          opacity: 0.7 !important;
          transition: all 0.3s ease !important;
        }
        
        .carousel .control-arrow:hover {
          opacity: 1 !important;
          background: rgba(255, 255, 255, 0.95) !important;
        }
        
        .carousel .control-arrow:before {
          border-top: 8px solid transparent !important;
          border-bottom: 8px solid transparent !important;
          border-left: 8px solid #333 !important;
        }
        
        .carousel .control-prev.control-arrow:before {
          border-left: 8px solid transparent !important;
          border-right: 8px solid #333 !important;
        }
        
        .carousel .control-dots {
          bottom: 20px !important;
        }
        
        .carousel .control-dots .dot {
          background: rgba(255, 255, 255, 0.5) !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
          width: 12px !important;
          height: 12px !important;
          border-radius: 50% !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        
        .carousel .control-dots .dot.selected {
          background: white !important;
          transform: scale(1.2) !important;
        }
      `}</style>
    </div>
  );
}

export default Slideshow;