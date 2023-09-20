import React from 'react';
import './Team.css'; // Import your CSS file for styling
import img1 from '../images/photu.jpg'
const OurTeam = () => {
  // Sample team members data (you can replace this with your own data)
  const teamMembers = [
    {
      id: 1,
      name: 'Ayush Yadav',
      position: 'Back End Developer',
      image: img1 // Replace with actual image path
    },
    {
      id: 2,
      name: 'Ashutosh Kumar',
      position: 'Front End Developer',
      image: img1, // Replace with actual image path
    },
    {
      id: 3,
      name: 'Yashraj Shukla',
      position: 'Back End Developer',
      image: img1, // Replace with actual image path
    },
    {
      id: 4,
      name: 'Nirjhara Raghuwanshi',
      position: 'Front End Developer',
      image: img1, // Replace with actual image path
    },
    {
      id: 5,
      name: 'Yogendra Manawat',
      position: 'Designer',
      image: img1, // Replace with actual image path
    },
    {
      id: 6,
      name: 'Sonia Singh',
      position: 'Front End Developer',
      image: img1, // Replace with actual image path
    },
  ];

  return (
    <div className="team-container">
      <h1 style={{fontWeight:"bold",fontSize:"27px"}}>Our Team:</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div className="team-member" style={{height:"200px",width:"200px",backgroundColor:"white"}} key={member.id}>
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <h2 style={{fontSize:"16px"}}>{member.name}</h2>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
