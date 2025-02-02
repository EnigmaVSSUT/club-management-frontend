import React, { useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
import { sampleProjects } from '@/constants';
import Typography from '@mui/material/Typography';
import NewProject from '@/components/ClubDetail/NewProject';
import { TextField, Button, Box } from "@mui/material";

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const itemsPerPage = 8;

  // Fix: Safely check if 'name' exists in project
  const filteredProjects = sampleProjects.filter(project =>
    (project.name ? project.name.toLowerCase() : '').includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  return (
    <>
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        paddingBottom: '20px',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
    
      <Typography
        sx={{
          color: '#fff',
          textAlign: 'left',
          fontSize: '30px',
          marginLeft: '18px',
          marginTop: '18px',
          fontWeight: 600,
        }}
      >
        All Projects
      </Typography>
      <Box
        sx={{
          width: {lg:"70%",md:"80%",sm:"85%",xs:"90%"},
          height: '134px',
          display: "flex",
          flexDirection:{sm:"column",md:"column",lg:"row",xs:"column"},
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: '30px',
          marginTop: '30px',
          border: '1.5px solid #252525',
          position: 'relative',
          borderRadius: '4px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#fff',
          }}
        >
          SEARCH PROJECTS
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search in projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            width: '60%',
            '& .MuiOutlinedInput-root': {
              borderRadius: '5px',
              backgroundColor: '#1E1E1E',
              color: '#fff',
            },
            '& .MuiOutlinedInput-input': {
              padding: '10px',
              fontSize: '16px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#252525',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#555',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#28a745',
            },
          }}
        />
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          margin: '0 auto',
        }}
      >
        {currentProjects.length > 0 ? (
          currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <Typography style={{ color: '#fff' }}>No projects available.</Typography>
        )}
      </Box>

      {filteredProjects.length > 0 && (
        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            marginBottom:'30px',
          }}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              sx={{
                margin: '0 5px',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                width: '36px', 
                height: '36px',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: currentPage === index + 1 ? '#555' : '#333',
                color: currentPage === index + 1 ? '#fff' : '#bbb',
                minWidth: '0', 
              }}
            >
              {index + 1}
            </Button>
          ))}

          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            sx={{
              marginLeft: '10px',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '5px',
              color: '#fff',
              transition: 'background-color 0.3s',
              backgroundColor: currentPage === totalPages ? '#999' : '#28a745',
            }}
          >
            Next
          </Button>
        </Box>
      )}



<NewProject />
    </Box>


</>
  );
};

export default Projects;
