import React, { useEffect, useState } from 'react';
// import { Image } from 'react-bootstrap';
import Image from 'next/image';

interface ImageWithTextProps {
  imageUrl: string;
  heading: string;
  paragraph: React.ReactNode;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl, heading, paragraph }) => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
  };

  const blackOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  };

  const textOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    width: '75%',
  };

  const [headingStyle, setHeadingStyle] = useState<React.CSSProperties>({ fontSize: '28px', fontWeight: 600, fontFamily: 'Poppins , sans-serif' ,margin: '0' , lineHeight: '54px'});
  const [paragraphStyle, setParagraphStyle] = useState<React.CSSProperties>({ fontSize: '16px', margin: '0',fontWeight: 600, fontFamily: 'Poppins , sans-serif' , color: '#FFFFFF' });

  // Function to update styles based on window size
  const updateStyles = () => {
    if (window.innerWidth < 600) {
      setHeadingStyle({ fontSize: '20px', fontWeight: 600, margin: '20px' , lineHeight: '54px'});
      setParagraphStyle({ fontSize: '16px', margin: '0' , fontWeight: 600});
    } else if (window.innerWidth < 900) {
      setHeadingStyle({ fontSize: '32px', fontWeight: 600, margin: '20px' , lineHeight: '54px'});
      setParagraphStyle({ fontSize: '16px', margin: '0' , fontWeight: 600});
    } else {
      setHeadingStyle({ fontSize: '36px', fontWeight: 600, margin: '30px' , lineHeight: '54px'});
      setParagraphStyle({ fontSize: '16px', margin: '0' , fontWeight: 600});
    }
  };

  useEffect(() => {
    updateStyles(); 
    window.addEventListener('resize', updateStyles); 

    return () => {
      window.removeEventListener('resize', updateStyles); 
    };
  }, []);

  return (
    <div style={containerStyle}>
      <Image 
    src={imageUrl} 
    alt="Description" 
    fill 
    style={{ objectFit: 'cover' }} 
  />
      <div style={blackOverlayStyle} />
      <div style={textOverlayStyle}>
        <h2 style={headingStyle}>{heading}</h2>
        <p style={paragraphStyle}>{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
