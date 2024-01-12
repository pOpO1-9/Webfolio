
import'./App.css'
import React, { useState } from 'react';
import { Tabs, Tab, Grid, Button, Card, CardMedia, CardContent, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { FaJs, FaReact, FaPython, FaCode, FaCogs, FaCodeBranch, FaGamepad, FaLinux, FaGithubAlt, FaGithub, FaWindows, FaGit, FaServer } from 'react-icons/fa';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 // Updated import



//import {ProgramingLanguages, Frameworks, Tools, Databases, OperatingSystems, Other} from './SkillData';
// Sample images (Replace these with your actual images)

import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import CVP from './CVP.pdf';

const tabData = [

  { label: 'Intro', component: Intro },
  { label: 'About Me', component: AboutMe },
  { label: 'Skills', component: Skills },
  { label: 'Portfolio', component: Portfolio },
  { label: 'Links', component: Links },
  
];

<Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex style={{ background: '', opacity: 0,  }} /> 

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newTab) => {
    setSelectedTab(newTab);
  };

  const TabComponent = tabData[selectedTab].component;

  return (
    <Box position="relative" height="100vh">

      {/* Tabs and content */}
      <Box style={{ padding: '20px' }}>
        <Tabs value={selectedTab} onChange={handleChange} centered>
          {tabData.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
        <Box mt={3}>
          <TabComponent />
        </Box>
      </Box>
    </Box>
  );
}


function Links() {
  const openResume = () => {
    window.open(CVP, '_blank', 'width=3400,height=4400'); // Open PDF in a new window with specified dimensions
  };

  const links = [
    { title: 'GitHub', url: 'https://github.com/pOpO1-9' },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/paul-el-khoury-8b78081a9/' },
    { title: 'Behance', url: 'https://www.behance.net/PaulelKhouryy' },
    { title: 'Resume', action: openResume }, // Use the function to open the PDF in a new window
  ];

  return (
    <Grid container spacing={2} justifyContent="center">
      {links.map((link, index) => (
        <Grid item key={index}>
          {link.action ? (
            <Button
              variant="contained"
              color="primary"
              onClick={link.action}
              style={{ borderRadius: '20px' }}
            >
              {link.title}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ borderRadius: '20px' }}
            >
              {link.title}
            </Button>
          )}
        </Grid>
      ))}
    </Grid>
  );
}

function Skills() {
  const containerStyle = {
    minHeight: '80vh',
    padding: '24px',
    background: 'linear-gradient(to right, #3f51b5, #f50057)',
    borderRadius: '8px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    color: '#fff',
  };

  const skills = [
    { name: 'JavaScript (ES6+)', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'C++', icon: <FaCode /> },
    { name: 'Blueprint Visual Scripting', icon: <FaCogs /> },
    { name: 'C#', icon: <FaCodeBranch /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Unreal Engine', icon: [<FaGamepad />, <FaCode />],},
    { name: 'Unity', icon: [<FaGamepad />, <FaCode />] },
    { name: 'MongoDB', icon: <FaServer /> },
    { name: 'MySQL', icon: <FaServer /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Git Bash', icon: <FaGithubAlt /> },
    { name: 'Visual Studio Code', icon: <FaCodeBranch /> },
    { name: 'Windows', icon: <FaWindows /> },
    { name: 'Linux', icon: <FaLinux /> },

  ];

  const categorizedSkills = {
    'Programming Languages': ['JavaScript (ES6+)', 'C++', 'C#', 'Python'],
    'Frameworks & Libraries': ['React'],
    'Game Development': ['Unreal Engine','Blueprint Visual Scripting', 'Unity'], //{ 'Game Engine': ['Unreal Engine', 'Unity'],'Tools': ['Blueprint Visual Scripting'] },
    
    'Databases': ['MongoDB', 'MySQL'],
    'Operating Systems': ['Windows', 'Linux'],
    'Other': ['Git', 'GitHub','Git Bash', 'Visual Studio Code', 'Git Bash', ]
  };

  const skillDetails = {
    'JavaScript (ES6+)': {
      section1: 'Section 1: Hey you! This is JavaScript.',
      section2: 'Section 2: More information about JavaScript',
      section3: 'Section 3: Additional details or notes for JavaScript',
    },
    'React': {
      section1: 'Section 1: Hey you! This is React.',
      section2: 'Section 2: More information about React',
      section3: 'Section 3: Additional details or notes for React',
    },
    'C++': {
      section1: 'Section 1: Hey you! This is C++.',
      section2: 'Section 2: More information about C++',
      section3: 'Section 3: Additional details or notes for C++',
    },

    'C#': {
      section1: 'Section 1: Hey you! This is C#.',
      section2: 'Section 2: More information about C#',
      section3: 'Section 3: Additional details or notes for C#',
    },

    'Python': {
      section1: 'Section 1: Hey you! This is Python.',
      section2: 'Section 2: More information about Pyhon',
      section3: 'Section 3: Additional details or notes for Python',
    },
    
    'Blueprint Visual Scripting': {
      section1: 'Section 1: Hey you! This is Blueprint Visual Scripting.',
      section2: 'Section 2: More information about Blueprint Visual Scripting',
      section3: 'Section 3: Additional details or notes for Blueprint Visual Scripting',
    },

    'Unreal Engine': {
      section1: 'Section 1: Hey you! This is Unreal Engine.',
      section2: 'Section 2: More information about Unreal Engine',
      section3: 'Section 3: Additional details or notes for Unreal Engine',
    },

    'Unity': {
      section1: 'Section 1: Hey you! This is Unity.',
      section2: 'Section 2: More information about Unity',
      section3: 'Section 3: Additional details or notes for Unity',
    },

    'MongoDB': {
      section1: 'Section 1: Hey you! This is MongoDB.',
      section2: 'Section 2: More information about MongoDB',
      section3: 'Section 3: Additional details or notes for MongoDB',
    },

    'MySQL': {
      section1: 'Section 1: Hey you! This is MySQL.',
      section2: 'Section 2: More information about MySQL',
      section3: 'Section 3: Additional details or notes for MySQL',
    },

    'Git': {
      section1: 'Section 1: Hey you! This is Git.',
      section2: 'Section 2: More information about Git',
      section3: 'Section 3: Additional details or notes for Git',
    },
    'GitHub': {
      section1: 'Section 1: Hey you! This is GitHub.',
      section2: 'Section 2: More information about GitHub',
      section3: 'Section 3: Additional details or notes for GitHub',
    },
    'Git Bash': {
      section1: 'Section 1: Hey you! This is Git Bash.',
      section2: 'Section 2: More information about Git Bash',
      section3: 'Section 3: Additional details or notes for Git Bash',
    },

    'Visual Studio Code': {
      section1: 'Section 1: Hey you! This is Visual Studio.',
      section2: 'Section 2: More information about Visual Studio',
      section3: 'Section 3: Additional details or notes for Visual Studio',
    },

    'Windows': {
      section1: 'Section 1: Hey you! This is Visual Studio.',
      section2: 'Section 2: More information about Visual Studio',
      section3: 'Section 3: Additional details or notes for Visual Studio',
    },

    'Linux': {
      section1: 'Section 1: Hey you! This is Visual Studio.',
      section2: 'Section 2: More information about Visual Studio',
      section3: 'Section 3: Additional details or notes for Visual Studio',
    }

    // following the format for the sections for other Tabs...
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={containerStyle}>
      {Object.entries(categorizedSkills).map(([category, skillsInCategory], index) => (
        <Grid item xs={12} key={index}>
          <Typography variant="h6" gutterBottom>
            {category}
          </Typography>
          {skillsInCategory.map((skillName, skillIndex) => {
            const skill = skills.find((s) => s.name === skillName);
            const detail = skillDetails[skillName]; // Fetch details for the current skill
            return (
              <Accordion key={skillIndex}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${skillIndex}-content`}
                  id={`panel${skillIndex}-header`}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ borderRadius: '60px' }}
                    startIcon={skill && skill.icon}
                    disabled={!skill}
                  >
                    {skillName}
                  </Button>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {detail && detail.section1} {/* Display section 1 content */}
                  </Typography>
                  <Typography>
                    {detail && detail.section2} {/* Display section 2 content */}
                  </Typography>
                  <Typography>
                    {detail && detail.section3} {/* Display section 3 content */}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Grid>
      ))}
    </Grid>
  );
}


function Portfolio() {
  const projects = [
    { title: 'Project 1', image: image1 },
    { title: 'Project 2', image: image2 },
    { title: 'Project 3', image: image3 },
    { title: 'Project 4', image: image4 },
    /* Add other projects */
    /* Make sure to add the image to the public folder and import it in this script */
  ];

  return (
    <Grid container spacing={2}>
    {projects.map((project, index) => (
      <Grid item xs={6} key={index}>
        <Card style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '720px' }}>
          <CardMedia 
            component="img" 
            height="480" 
            image={project.image} 
            style={{ 
              borderRadius: '10px 10px 0 0',
              display: 'flex',        // Set display to flex
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center'    // Center content vertically
            }} 
          />
          <CardContent>
            <Typography variant="h6" align="center">{project.title}</Typography>
            <Typography variant="body2" align="center"><Links /></Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);
}


function AboutMe() {
  const containerStyle = {
    minHeight: '80vh',
    padding: '24px',
    background: 'linear-gradient(to right, #f50057, #3f51b5)',
    borderRadius: '8px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    color: '#fff',
  };

  const buttonStyle = {
    marginTop: '16px',
    color: '#f50057',
    background: '#fff',
    borderRadius: '8px',
    '&:hover': {
      background: '#f50057',
      color: '#fff',
    },
  };

  const handleClick = (skillName) => {
    console.log('Button clicked for:', skillName);
    // Trigger a surprise action upon clicking the button
    alert(`That was satisfying wasn't it ${skillName}. Something amazing is happening!`);
    // You can also perform other surprising actions here
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={containerStyle}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h2" fontSize={40} gutterBottom>
          Welcome to My World!
        </Typography>

        <Typography variant="body1" fontSize={25} gutterBottom>
        Education: Computer Science - Computer Graphics and Animation Bachelor  Masters in IT and Data Management
        <br/>
        </Typography>

        <Typography variant="body1" fontSize={12} gutterBottom>
      As a Computer Science - Computer Graphics and Animation bachelor holder with a masters in IT and data management, 
      I have a profound love for technology. Staying updated with the latest tech news is my passion. I enjoy exploring and developing 
      experiences across various domains, particularly in the game industry, which has been my primary focus. However, my versatility shines through 
      as I've contributed to projects beyond the gaming sphere, such as my role as an Unreal Engine developer at SAP, which was an immensely enriching experience. 
      I am adept in coding with Python and C++, languages that I find both fascinating and impactful, my ability to learn new languages and frameworks is a strength,
      as well as my ability to learn new technologies and frameworks. I am also adept in the use of various software and hardware platforms, you get the point, I'm a tech freak!
      <br/>

        </Typography>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={buttonStyle}
        >
          Click Me!
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Additional UI elements or images can be added here */}
      </Grid>
    </Grid>
  );
}

//function AboutMe() {
  // Sample data for milestones or events
  //const milestones = [
   // {
     // title: 'Education',
     // date: 'Computer Science - Computer Graphics and Animation Bachelor + Masters in IT and Data Management',
     // description: `As a Computer Science - Computer Graphics and Animation bachelor holder with a masters in IT and data management, 
      //I have a profound love for technology. Staying updated with the latest tech news is my passion. I enjoy exploring and developing 
      //experiences across various domains, particularly in the game industry, which has been my primary focus. However, my versatility shines through 
      //as I've contributed to projects beyond the gaming sphere, such as my role as an Unreal Engine developer at SAP, which was an immensely enriching experience. 
      //I am adept in coding with Python and C++, languages that I find both fascinating and impactful.`,
   // },
    //{
     // title: 'Completed React Certification',
      //date: 'July 2019',
      //description: 'Achieved React Developer Certification from XYZ Academy.',
    //},
    // Add more milestones or events as needed
  //];


function Intro() {
  const containerStyle = {
    minHeight: '80vh',
    padding: '24px',
    background: 'linear-gradient(to right, #3f51b5, #f50057)',
    borderRadius: '8px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    color: '#fff',
  };

  const buttonStyle = {
    marginTop: '16px',
    color: '#f50057',
    background: '#fff',
    borderRadius: '8px',
    '&:hover': {
      background: '#f50057',
      color: '#fff',
    },
  };

  const handleClick = (skillName) => {
    console.log('Button clicked for:', skillName);
    // Trigger a surprise action upon clicking the button
    alert(`Surprise! You clicked on the button! Beware buttons are sometimes harmeful, if you're not sure about what you are clicking on, you could catch some bugs bzzzzzz! Haha! YOU ARE LUCKY! It's just me This is my way of showing my skills and Welcoming you to my react app with buttons yay, check it out! Swich tabs to see more!`);
    // You can also perform other surprising actions here, if you want to add more
    containerStyle.background = 'linear-gradient(to right, #f50057, #3f51b5)';
    containerStyle.color = '#fff';
    containerStyle.borderRadius = '8px';
    containerStyle.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={containerStyle}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h2" gutterBottom>
          Welcome to My World!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore my Website to learn more about me and my skills.<br/>
          Enjoy a glimpse of my journey in this dummy website. <br/> I was told it could get me a job so I did not take it <br/> with a grain of salt Haha! <br/>
          Alright let's go!
        </Typography>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={buttonStyle}
        >
          Explore More
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Additional UI elements or images can be added here */}
      </Grid>
    </Grid>
  );
}

export default App;
