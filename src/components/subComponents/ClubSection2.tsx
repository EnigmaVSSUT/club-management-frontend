import React from 'react';
import ProfileCard from './Card';

interface ProfileData {
  name: string;
  title: string;
  department: string;
  imageUrl: string;
}

interface CardSectionProps {
  profiles: ProfileData[];
}

const CardSection: React.FC<CardSectionProps> = ({ profiles }) => {
  return (
    <div style={styles.container}>
      <div style={styles.cardContainer}>
        {profiles.map((profile, index) => (
          <div style={styles.card} key={index}>
            <ProfileCard
              name={profile.name}
              title={profile.title}
              department={profile.department}
              imageUrl={profile.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center', // Center the card container
    backgroundColor: '#1E1E1E',
    padding: '20px 0', // Optional padding for spacing
  },
  cardContainer: {
    width: '80%', // Set the width of the card container to 80%
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Center the cards
  },
  card: {
    flex: '0 1 calc(25% - 10px)', // Set to 25% for 4 cards per row
    margin: '5px', // Margin for spacing
    padding: '10px',
    boxSizing: 'border-box',
  },
};

export default CardSection;
