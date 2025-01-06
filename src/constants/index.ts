// Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one special character
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

// Uppercase, lowercase, space, hyphen(-), apostrophe (') are allowed
export const fullNameRegex = /^[a-zA-Z\s'-]{3,50}$/;

// Username must start with a letter; it can include letters, numbers, and special characters but should not contain space
export const usernameRegex = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()-_=+{}[\];:'",.<>?/|\\`~]{2,14}$/;

// Image array with captions
export const images = [
  {
    src: '/images/image1.jpg',
    caption: 'Explore all the clubs of your college',
  },
  {
    src: '/images/image2.jpg',
    caption: 'Explore all the clubs of your college',
  },
  {
    src: '/images/image3.jpg',
    caption: 'Explore all the clubs of your college',
  },
];

// Clubs information
export const clubs = [
  { name: 'E-cell', description: 'Techno-management club of VSSUT, Burla', logo: '/eecell.png',id: '1' },
  { name: 'Enigma', description: 'Official web and coding club of VSSUT, Burla', logo: '/enigma.jpg',id: '2' },
  { name: 'IEEE SB', description: 'Electronics and Electrical Society of VSSUT, Burla', logo: '/ieee.jpg',id: '3' },
  { name: 'Enigma', description: 'Official web and coding club of VSSUT, Burla', logo: '/enigma.jpg',id: '4' },


];

// Technical clubs (ensure distinct entries)
export const technicalClubs = [
  { name: 'Enigma', description: 'Official web and coding club of VSSUT, Burla', logo: '/enigma.jpg' ,id:"1"},
  { name: 'Robotics', description: 'Electronics and Electrical Society of VSSUT, Burla', logo: '/ieee.jpg',id:"2" },


];

// Non-technical clubs (ensure distinct entries)
export const nonTechnicalClubs = [
  { name: 'IEEE SB', description: 'Electronics and Electrical Society of VSSUT, Burla', logo: '/ieee.jpg',id:"3" },
];

// Consider removing or updating for unique images
export const imagesArray = [
  {
    src: '/ClubPIC2.jpg',
    caption: 'Explore all the clubs of your college',
  },
  {
    src: '/ClubPIC1.jpg',
    caption: 'Another caption for another image',
  },
];
//sample projects
export const sampleProjects = [
  {
    name: "Project Alpha",
    domain: "Web Development",
    description: "A web application built with React and Node.js.",
    dates: "Jan 2023 - March 2023",
  },
  {
    name: "Project Beta",
    domain: "Mobile App",
    description: "A mobile app developed using Flutter.",
    dates: "April 2023 - June 2023",
  },
  {
    name: "Project Gamma",
    domain: "Machine Learning",
    description: "A machine learning model for predicting sales.",
    dates: "July 2023 - September 2023",
  },
  {
    name: "Project Delta",
    domain: "Data Science",
    description: "A data analysis project using Python and Pandas.",
    dates: "October 2023 - December 2023",
  },
  {
    name: "Project Epsilon",
    domain: "Blockchain",
    description: "A data analysis project using Python and Pandas.",
    dates: "January 2024 - March 2024",
  },
  {
    name: "Project Zeta",
    domain: "Cybersecurity",
    description: "A security framework for protecting web applications.",
    dates: "February 2023 - May 2023",
  },
  {
    name: "Project Eta",
    domain: "Augmented Reality",
    description: "An AR app for interactive education experiences.",
    dates: "June 2023 - August 2023",
  },
  {
    name: "Project Theta",
    domain: "Game Development",
    description: "A multiplayer game developed using Unity.",
    dates: "September 2023 - November 2023",
  },
  {
    name: "Project Iota",
    domain: "IoT",
    description: "An IoT solution for smart home automation.",
    dates: "December 2023 - February 2024",
  },
  {
    name: "Project Kappa",
    domain: "Cloud Computing",
    description: "A cloud-based service for data storage and retrieval.",
    dates: "March 2024 - May 2024",
  },
  {
    name: "Project Lambda",
    domain: "DevOps",
    description: "Automated deployment pipeline for microservices.",
    dates: "April 2023 - June 2023",
  },
  {
    name: "Project Mu",
    domain: "Natural Language Processing",
    description: "A chatbot application using NLP techniques.",
    dates: "July 2023 - September 2023",
  },
  {
    name: "Project Nu",
    domain: "Mobile App",
    description: "A fitness tracking app for health enthusiasts.",
    dates: "October 2023 - December 2023",
  },
  {
    name: "Project Xi",
    domain: "E-commerce",
    description: "An online store built with React and Node.js.",
    dates: "January 2024 - March 2024",
  },
  {
    name: "Project Omicron",
    domain: "Virtual Reality",
    description: "A VR experience for immersive gaming.",
    dates: "February 2024 - April 2024",
  },
  {
    name: "Project Pi",
    domain: "Artificial Intelligence",
    description: "An AI-based recommendation system.",
    dates: "March 2023 - June 2023",
  },
  {
    name: "Project Rho",
    domain: "Big Data",
    description: "Data processing framework using Apache Spark.",
    dates: "July 2023 - September 2023",
  },
  {
    name: "Project Sigma",
    domain: "Web Development",
    description: "A responsive website for a local business.",
    dates: "October 2023 - November 2023",
  },
  {
    name: "Project Tau",
    domain: "Social Media",
    description: "A platform for sharing multimedia content.",
    dates: "December 2023 - February 2024",
  },
  {
    name: "Project Upsilon",
    domain: "Health Tech",
    description: "An app for remote patient monitoring.",
    dates: "January 2024 - March 2024",
  },
  {
    name: "Project Phi",
    domain: "FinTech",
    description: "A personal finance management tool.",
    dates: "February 2023 - April 2023",
  },
  {
    name: "Project Chi",
    domain: "Education",
    description: "An online learning platform for students.",
    dates: "May 2023 - July 2023",
  },
  {
    name: "Project Psi",
    domain: "Real Estate",
    description: "A property management system for landlords.",
    dates: "August 2023 - October 2023",
  },
  {
    name: "Project Omega",
    domain: "Travel Tech",
    description: "A travel planning app for easy itinerary management.",
    dates: "November 2023 - January 2024",
  },
  {
    name: "Project Zeta Plus",
    domain: "Robotics",
    description: "A robotic arm for automation in manufacturing.",
    dates: "February 2024 - April 2024",
  },
];



// Profiles of individuals
export const profiles = [
  {
    name: "Prof. Lorem Ipsum Manet",
    title: "Professor",
    department: "Lorem Engineering",
    imageUrl: "/enigma.jpg"
  },
  // Add more unique profiles here
];

// Profiles for web development context
export const profiles1 = [
  { name: "John Doe", title: "Coordinator", department: "Computer Science", imageUrl: "/Alumn_1.webp", batch: "2023" },
  { name: "Jane Smith", title: "Assistant Coordinator", department: "Mechanical Engineering", imageUrl: "/Alumn_2.webp", batch: "2022" },
  { name: "Alice Johnson", title: "Domain Lead", department: "Electrical Engineering", imageUrl: "/Alumn_3.webp", batch: "2023" },
  { name: "Bob Brown", title: "Member", department: "Civil Engineering", imageUrl: "/Alumn_1.webp", batch: "2024" },
  { name: "Emily Davis", title: "Domain Lead", department: "Chemical Engineering", imageUrl: "/Alumn_1.webp", batch: "2022" },
  { name: "Michael Wilson", title: "Member", department: "Electronics", imageUrl: "/Alumn_2.webp", batch: "2023" },
  { name: "Sarah Lee", title: "Member", department: "Biotechnology", imageUrl: "/Alumn_3.webp", batch: "2021" },
  { name: "David Martinez", title: "Member", department: "Computer Science", imageUrl: "/Alumn_1.webp", batch: "2023" },
  { name: "Laura Kim", title: "Member", department: "Mechanical Engineering", imageUrl: "/Alumn_1.webp", batch: "2023" },
  { name: "James Anderson", title: "Domain Lead", department: "Electrical Engineering", imageUrl: "/Alumn_1.webp", batch: "2023" },
  { name: "Jessica Taylor", title: "Member", department: "Civil Engineering", imageUrl: "/Alumn_1.webp", batch: "2024" },
  { name: "William Thomas", title: "Member", department: "Chemical Engineering", imageUrl: "/Alumn_1.webp", batch: "2023" },
  { name: "Sophia Jackson", title: "Coordinator", department: "Electronics", imageUrl: "/Alumn_1.webp", batch: "2022" },
  { name: "Elijah White", title: "Domain Lead", department: "Biotechnology", imageUrl: "/Alumn_1.webp", batch: "2024" },
  { name: "Grace Harris", title: "Member", department: "Computer Science", imageUrl: "/Alumn_1.webp", batch: "2022" },
  { name: "Noah Lewis", title: "Member", department: "Mechanical Engineering", imageUrl: "/Alumn_1.webp", batch: "2021" },
  { name: "Olivia Walker", title: "Member", department: "Electrical Engineering", imageUrl: "/Alumn_1.webp", batch: "2022" },
  { name: "Lucas Hall", title: "Member", department: "Civil Engineering", imageUrl: "/Alumn_1.webp", batch: "2023" },
  { name: "Amelia Allen", title: "Domain Lead", department: "Chemical Engineering", imageUrl: "/Alumn_1.webp", batch: "2023" },
  { name: "Benjamin Young", title: "Member", department: "Electronics", imageUrl: "/Alumn_1.webp", batch: "2022" },
  { name: "Mia Hernandez", title: "Domain Lead", department: "Biotechnology", imageUrl: "/Alumn_1.webp", batch: "2021" },
  { name: "Daniel King", title: "Member", department: "Computer Science", imageUrl: "/Alumn_1.webp", batch: "2023" },
  { name: "Aria Scott", title: "Member", department: "Mechanical Engineering", imageUrl: "/Alumn_1.webp", batch: "2024" },
  { name: "Logan Hill", title: "Member", department: "Electrical Engineering", imageUrl: "/Alumn_1.webp", batch: "2022" },
];


// Batches list
export const batches = [
  'All Batches',
  '2028',
  '2027',
  '2026',
  '2025',
  '2024',
  '2023',
  '2022',
  '2021',
  '2020',
];


//sample achievement
export const sampleAchievement = [{
  image: '/enigma.jpg',
  title: 'Annual Coding Marathon: A competitive programming event focused on algorithmic challenges.',
  faculty: 'Prof. Sanjay Agrawal [Dean of Academic Affairs]',
  date: 'Monday, 18th December 2023, 4:30 PM',
  location: 'E-learning centre',
},
{
  image: '/enigma.jpg',
  title: 'Annual Coding Marathon: A competitive programming event focused on algorithmic challenges.',
  faculty: 'Prof. Sanjay Agrawal [Dean of Academic Affairs]',
  date: 'Monday, 18th December 2023, 4:30 PM',
  location: 'E-learning centre',
},
{
  image: '/enigma.jpg',
  title: 'Annual Coding Marathon: A competitive programming event focused on algorithmic challenges.',
  faculty: 'Prof. Sanjay Agrawal [Dean of Academic Affairs]',
  date: 'Monday, 18th December 2023, 4:30 PM',
  location: 'E-learning centre',
},
{
  image: '/enigma.jpg',
  title: 'Annual Coding Marathon: A competitive programming event focused on algorithmic challenges.',
  faculty: 'Prof. Sanjay Agrawal [Dean of Academic Affairs]',
  date: 'Monday, 18th December 2023, 4:30 PM',
  location: 'E-learning centre',
},
{
  image: '/enigma.jpg',
  title: 'Annual Coding Marathon: A competitive programming event focused on algorithmic challenges.',
  faculty: 'Prof. Sanjay Agrawal [Dean of Academic Affairs]',
  date: 'Monday, 18th December 2023, 4:30 PM',
  location: 'E-learning centre',
},
{
  image: '/enigma.jpg',
  title: 'Annual Coding Marathon: A competitive programming event focused on algorithmic challenges.',
  faculty: 'Prof. Sanjay Agrawal [Dean of Academic Affairs]',
  date: 'Monday, 18th December 2023, 4:30 PM',
  location: 'E-learning centre',
},
{
  image: '/enigma.jpg',
  title: 'Annual Coding Marathon: A competitive programming event focused on algorithmic challenges.',
  faculty: 'Prof. Sanjay Agrawal [Dean of Academic Affairs]',
  date: 'Monday, 18th December 2023, 4:30 PM',
  location: 'E-learning centre',
},
{
  image: '/enigma.jpg',
  title: 'Annual Coding Marathon: A competitive programming event focused on algorithmic challenges.',
  faculty: 'Prof. Sanjay Agrawal [Dean of Academic Affairs]',
  date: 'Monday, 18th December 2023, 4:30 PM',
  location: 'E-learning centre',
}
];