import axios from "axios"
export const BASE_BACKEND_URL = "https://club-management-backend.onrender.com";
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



export interface Club {
  name: string;
  description: string;
  logo: string;
  id: string;
}


export interface Club {
  name: string;
  description: string;
  logo: string;
  id: string;
}

export interface ApiClub {
  clubName: string;
  clubDescription: string;
  clubLogo: string;
  _id: string;
}

export const technicalClubs: Club[] = [];
export const nonTechnicalClubs: Club[] = [];

export const clubs: Club[] = [...technicalClubs, ...nonTechnicalClubs];

export async function fetchClubs(type: 'Tech' | 'Non-Tech'): Promise<void> {
  try {
    console.log(`Fetching ${type} clubs...`);
    console.log("env", BASE_BACKEND_URL);

   
    const response = await axios.get<{ data: ApiClub[] }>(`${BASE_BACKEND_URL}/api/v1/clubs/getAll/${type}`);
    const { data } = response.data;
    console.log(`${type} clubs data:`, data);

 
    const fetchedClubs = data.map((club: ApiClub): Club => ({
      name: club.clubName,
      description: club.clubDescription,
      logo: club.clubLogo,
      id: club._id,
    }));

    console.log(`Fetched ${type} clubs:`, fetchedClubs);

    if (type === 'Tech') {
      technicalClubs.length = 0;
      technicalClubs.push(...fetchedClubs);
    } else if (type === 'Non-Tech') {
      nonTechnicalClubs.length = 0;
      nonTechnicalClubs.push(...fetchedClubs);
    }

    console.log(
      `Updated ${type === 'Tech' ? 'technicalClubs' : 'nonTechnicalClubs'}:`,
      type === 'Tech' ? technicalClubs : nonTechnicalClubs
    );
  } catch (error) {
    console.error(`Error fetching ${type} clubs:`, error);
  }
}



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
// export const sampleProjects = [
//   {
//     name: "Project Alpha",
//     domain: "Web Development",
//     description: "A web application built with React and Node.js.",
//     dates: "Jan 2023 - March 2023",
//   },
//   {
//     name: "Project Zeta Plus",
//     domain: "Robotics",
//     description: "A robotic arm for automation in manufacturing.",
//     dates: "February 2024 - April 2024",
//   },
// ];

interface Project {
  _id: string;
  name: string;
  domain: string;
  description: string;
  dates: string; 
}

export let sampleProjects: Project[] = [];

export async function fetchProjects(): Promise<void> {
  console.log("Fetching projects...");

  try {
    const res = await axios.get<{ data: Project[] }>(
      "https://club-management-backend.onrender.com/api/v1/projects/getAllProjects"
    );

    const result = res.data.data;

    console.log("API response from Project:", res);
    console.log("Retrieved data from project:", result);


    sampleProjects = result.map((project) => ({
      _id: project._id,
      name: project.name,
      domain: project.domain,
      description: project.description,
      dates: project.dates, 
    }));

    console.log("Processed projects:", sampleProjects);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}




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
// export const profiles1 = [
//   { name: "John Doe", title: "Coordinator", department: "Computer Science", imageUrl: "/Alumn_1.webp", batch: "2023" },
//   { name: "Jane Smith", title: "Assistant Coordinator", department: "Mechanical Engineering", imageUrl: "/Alumn_2.webp", batch: "2022" },
//   { name: "Alice Johnson", title: "Domain Lead", department: "Electrical Engineering", imageUrl: "/Alumn_3.webp", batch: "2023" },
//   { name: "Bob Brown", title: "Member", department: "Civil Engineering", imageUrl: "/Alumn_1.webp", batch: "2024" },
//   { name: "Emily Davis", title: "Domain Lead", department: "Chemical Engineering", imageUrl: "/Alumn_1.webp", batch: "2022" },
//   { name: "Michael Wilson", title: "Member", department: "Electronics", imageUrl: "/Alumn_2.webp", batch: "2023" },
//   { name: "Sarah Lee", title: "Member", department: "Biotechnology", imageUrl: "/Alumn_3.webp", batch: "2021" },
//   { name: "David Martinez", title: "Member", department: "Computer Science", imageUrl: "/Alumn_1.webp", batch: "2023" },
//   { name: "Laura Kim", title: "Member", department: "Mechanical Engineering", imageUrl: "/Alumn_1.webp", batch: "2023" },
  
// ];


// // Batches list
// export const batches = [
//   'All Batches',
//   '2028',
//   '2027',
//   '2026',
//   '2025',
//   '2024',
//   '2023',
//   '2022',
//   '2021',
//   '2020',
// ];

interface Type {
  fullName: string;  
  role: string;
  department: string;
  photo: string; 
  yearOfGraduation: string;
}


interface MemberAPIResponse {
  _id: string;
  type?: Type; 
}

interface Member {
  name: string;
  title: string;
  department: string;
  imageUrl: string;
  batch: string;
}

export const profiles1: Member[] = [];
export const batches: string[] = ["All Batches"]; 

export async function fetchMembers(): Promise<void> {
  try {
    console.log("Fetching members...");


    profiles1.length = 0;  
    batches.length = 1;    

  
    const res = await axios.get<{ data: MemberAPIResponse[] }>(
      `${BASE_BACKEND_URL}/api/v1/clubs/get/members/6782027a03234e0d2cdfcdec`,
      {
        params: {
          sort: '{"createdAt":-1}',
          fields: "name,title,department,imageUrl,yearOfGraduation",
          limit: 100,
          offset: 0,
        },
      }
    );

    const members = res.data.data;
    console.log("Fetched members raw data:", members);

  
    members.forEach((member) => {
      profiles1.push({
        name: member.type?.fullName || "Unknown Name",
        title: member.type?.role || "Unknown Title",
        department: member.type?.department || "Unknown Department",
        imageUrl: member.type?.photo || "/default.webp", 
        batch: member.type?.yearOfGraduation || "Unknown Year",
      });
    });


    const graduationYears = Array.from(
      new Set(
        members
          .map((member) => member.type?.yearOfGraduation)
          .filter((year): year is string => year !== undefined)
      )
    );
    batches.push(...graduationYears.sort());

    console.log("Processed profiles:", profiles1);
    console.log("Processed batches:", batches);

  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

interface Achievement {
  _id: string;
  Image: string;
  header: string;
  description: string;
}

export let sampleAchievement: Achievement[] = [];

export async function fetchAchievements(): Promise<void> {
  console.log("Fetching achievements...");

  try {
    const res = await axios.get<{ data: Achievement[] }>(
      "https://club-management-backend.onrender.com/api/v1/achievements/getAllAchievements",
     
    );

    const result = res.data.data;

    console.log("API response:", res);
    console.log("Retrieved data:", result);

 
    sampleAchievement = result.map((achievement) => ({
      _id: achievement._id,
      Image: achievement.Image, 
      header: achievement.header,
      description: achievement.description,
    }));

    console.log("Processed achievements:", sampleAchievement);
  } catch (error) {
    console.error("Error fetching achievements:", error);
  }
}

//events
// export const sampleEvents = [
//   {
//     image: "https://via.placeholder.com/200",
//     title: "Tech Summit 2025",
//     faculty: "Dr. Jane Smith",
//     date: "2025-03-15",
//     location: "Auditorium A",
//   },
//   {
//     image: "https://via.placeholder.com/200",
//     title: "AI Workshop",
//     faculty: "Prof. John Doe",
//     date: "2025-04-20",
//     location: "Lab 5, Tech Campus",
//   },
//   {
//     image: "https://via.placeholder.com/200",
//     title: "Robotics Expo",
//     faculty: "Dr. Sarah Lee",
//     date: "2025-05-10",
//     location: "Main Hall",
//   },
//   {
//     image: "https://via.placeholder.com/200",
//     title: "Coding Hackathon",
//     faculty: "Mr. Adam White",
//     date: "2025-06-25",
//     location: "Computer Science Block",
//   },
// ];





interface Event {
  _id: string;
  image: string;
  name: string;
  faculty: string;
  date: string;
  venue: string;
}

export let sampleEvents: Event[] = [];

export async function fetchEvents(): Promise<void> {
  console.log("Fetching events...");

  try {
    const res = await axios.get<{ data: { data: Event[] } }>(
      "https://club-management-backend.onrender.com/api/v1/events/upcoming"
    );

    // Debugging: Log the whole response structure to verify its structure
    console.log("API response from events:", res);

    // Check if 'res.data.data' is indeed an array
    const result = Array.isArray(res.data.data) ? res.data.data : [];

    console.log("Retrieved data from events:", result);

    // Mapping and formatting date to 'YYYY-MM-DD'
    sampleEvents = result.map((event) => {
      const formattedDate = new Date(event.date).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "2-digit", 
        day: "2-digit", 
        timeZone: "Asia/Kolkata", 
      });

      return {
        _id: event._id,
        image: "https://placehold.co/400", // placeholder image
        name: event.name,
        faculty: event.faculty || "Faculty Advisor Name", // default value if faculty is empty
        date: formattedDate, // formatted date
        venue: event.venue,
      };
    });

    console.log("Processed events:", sampleEvents);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}




