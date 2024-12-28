"use client";
import React, { useState } from 'react';
import AchievementCard from './achievementCard';
import { sampleAchievement } from '@/constants';
import Typography from '@mui/material/Typography';

const Achievements: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const itemsPerPage = 3;

  // Filter based on title
  const filteredAchievements = sampleAchievement.filter(achievement =>
    achievement.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAchievements.length / itemsPerPage);
  const currentAchievements = filteredAchievements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const isNextButtonDisabled = currentPage === totalPages || totalPages === 0;

  return (
    <div style={styles.container}>
      <h1 style={{ color: '#fff', textAlign: 'left', fontSize: '30px', marginLeft: "18px", marginTop: "18px", fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
        All Achievements
      </h1>

      <div style={styles.searchContainer}>
  <Typography
    variant="h6"
    component="div"
    sx={{
      fontWeight: 600,
      position: 'absolute',
      left: '20%',
      top: 0,
      marginTop: '12px',
      '@media (max-width: 768px)': {
        // left: '10%', // Adjust for smaller screens
        fontSize: '14px', // Smaller font size on mobile
      },
    }}
  >
    SEARCH ACHIEVEMENTS
  </Typography>
  <input
    type="text"
    placeholder="Search in Achievements..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    style={styles.searchInput}
  />
</div>

      <div style={styles.cardContainer}>
        {currentAchievements.length > 0 ? (
          currentAchievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              event={achievement}  // Pass the achievement data
            />
          ))
        ) : (
          <p style={{ color: '#fff' }}>No achievements available.</p>
        )}
      </div>

      {filteredAchievements.length > 0 && (
        <div style={styles.pagination}>
          <div style={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                style={{
                  ...styles.pageButton,
                  backgroundColor: currentPage === index + 1 ? '#555' : '#333',
                  color: currentPage === index + 1 ? '#fff' : '#bbb',
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextPage}
            disabled={isNextButtonDisabled}
            style={{
              ...styles.nextButton,
              backgroundColor: isNextButtonDisabled ? '#999' : '#28a745',
              cursor: isNextButtonDisabled ? 'not-allowed' : 'pointer',
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingBottom: '20px',
    fontFamily: 'Poppins, sans-serif',
  },
  searchContainer: {
    width: '90%',
    height: '134px',
    paddingTop: '33px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '30px',
    marginTop: '30px',
    border: '1.5px solid #252525',
    position: 'relative',
    borderRadius: '4px',
  },
  searchInput: {
    width: '60%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #252525',
    fontSize: '16px',
    background: '#1E1E1E',
    color: '#fff',
  },
  cardContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: "space-around",
    flexWrap: 'wrap',
    margin: '0 auto',
  },
  pagination: {
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  nextButton: {
    marginLeft: '10px',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    backgroundColor: '#28a745',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  pageNumbers: {
    display: 'flex',
    gap: '5px',
  },
  pageButton: {
    margin: '0 5px',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    color: '#bbb',
  },
};

// // Additional media queries for responsiveness
// const mediaStyles = `
// @media (max-width: 768px) {
//   .searchContainer {
//     width: 80%;
//     padding-top: 20px;
//   }
//   .searchInput {
//     width: 90%;
//     font-size: 14px;
//   }
//   .pageButton {
//     width: 32px;
//     height: 32px;
//   }
// }

// @media (max-width: 480px) {
//   .searchContainer {
//     width: '100%';
//     height: 120px;
//     padding-top: 15px;
//   }
//   .searchInput {
//     width: '80%';
//     font-size: 14px;
//   }
//   .pageButton {
//     width: 28px;
//     height: 28px;
//   }
// }
// `;



export default Achievements;
