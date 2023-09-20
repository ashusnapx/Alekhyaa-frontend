import React from 'react';
import './Team.css'; // Import your CSS file for styling
import img1 from '../images/photu.jpg'
const OurTeam = () => {
  // Sample team members data (you can replace this with your own data)
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Founder & CEO',
      image: img1 // Replace with actual image path
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Lead Designer',
      image: img1, // Replace with actual image path
    },
    {
      id: 3,
      name: 'Bob Johnson',
      position: 'Lead Developer',
      image: img1, // Replace with actual image path
    },
    {
      id: 4,
      name: 'John Doe',
      position: 'Founder & CEO',
      image: img1, // Replace with actual image path
    },
    {
      id: 5,
      name: 'Jane Smith',
      position: 'Lead Designer',
      image: img1, // Replace with actual image path
    },
    {
      id: 6,
      name: 'Bob Johnson',
      position: 'Lead Developer',
      image: img1, // Replace with actual image path
    },
  ];

  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div className="team-member" key={member.id}>
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <h2>{member.name}</h2>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
