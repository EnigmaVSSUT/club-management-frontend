import React from 'react';
import Image from 'next/image';
interface ProfileCardProps {
  name: string;
  title: string;
  department: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, department, imageUrl }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
      <Image
  src={imageUrl}
  alt={`Profile picture of ${name}`}
  width={200} 
  height={200} 
  style={styles.image}
/>
      </div>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.title}>{title}</p>
      <p style={styles.department}>{department}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: '#252525',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '250px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
    margin: '15px', 
    border: '1px solid #333',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '15px',
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
  name: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0',
  },
  title: {
    color: '#d3d3d3',
    fontSize: '14px',
    margin: '5px 0',
  },
  department: {
    color: '#8f8f8f',
    fontSize: '14px',
    margin: '0',
  },
};

export default ProfileCard;
