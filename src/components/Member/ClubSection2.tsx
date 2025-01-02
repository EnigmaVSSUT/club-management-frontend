import React, { useState } from 'react';
import ProfileCard from './Card';
import { batches } from '@/constants';

interface ProfileData {
  name: string;
  title: string;
  department: string;
  imageUrl: string;
  batch?: string;
}

interface CardSectionProps {
  profiles: ProfileData[];
}

const CardSection: React.FC<CardSectionProps> = ({ profiles }) => {
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  const filteredProfiles = selectedBatch
    ? profiles.filter(profile => profile.batch === selectedBatch)
    : profiles;

  const totalPages = Math.ceil(filteredProfiles.length / itemsPerPage);
  const currentProfiles = filteredProfiles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleBatchChange = (batch: string | null) => {
    setSelectedBatch(batch);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    } else if (selectedBatch) {
      setSelectedBatch(null);
      setCurrentPage(1);
    }
  };

  const isNextButtonDisabled = currentPage === totalPages || totalPages === 0;

  return (
    <div style={styles.container}>
      {/* Batch Selection */}
      <div style={styles.batchWrapper}>
        <div style={styles.batchSelection}>
          {batches.map((batch) => (
            <button
              key={batch}
              onClick={() => handleBatchChange(batch === 'All Batches' ? null : batch)}
              style={{
                ...styles.batchButton,
                color: selectedBatch === (batch === 'All Batches' ? null : batch) ? 'white' : '#bdbdbd',
              }}
            >
              {batch}
              <span
                style={{
                  ...styles.underline,
                  opacity: selectedBatch === (batch === 'All Batches' ? null : batch) ? 1 : 0,
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Profile Cards */}
      <div style={styles.cardContainer}>
        {currentProfiles.length > 0 ? (
          currentProfiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              title={profile.title}
              department={profile.department}
              imageUrl={profile.imageUrl}
            />
          ))
        ) : (
          <p style={{ color: '#fff' }}>No profiles available.</p>
        )}
      </div>

      {/* Pagination */}
      {filteredProfiles.length > 0 && (
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
    padding: '20px 0',
  },
  batchWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  batchSelection: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    padding: '10px 0',
    maxWidth: '90%', 
  },
  batchButton: {
    position: 'relative',
    fontSize: '18px',
    padding: '12px 16px',
    textTransform: 'none',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  underline: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    height: '2px',
    width: '100%',
    backgroundColor: 'white',
    transition: 'opacity 0.3s ease',
    opacity: 0,
  },
  cardContainer: {
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
  },
};

export default CardSection;
