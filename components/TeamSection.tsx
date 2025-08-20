Here's a React component for a Team Section that fits the luxurious and elegant design of your AirBNB website, HouseIL. This component is styled with a dark theme and uses pink and black colors.

// components/TeamSection.tsx

import React from 'react';
import './TeamSection.css'; // Import your CSS file for styling

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'Founder & CEO',
    image: '/images/alice.jpg',
  },
  {
    name: 'Bob Smith',
    role: 'Head of Marketing',
    image: '/images/bob.jpg',
  },
  {
    name: 'Catherine Lee',
    role: 'Lead Designer',
    image: '/images/catherine.jpg',
  },
  {
    name: 'David Brown',
    role: 'Chief Technology Officer',
    image: '/images/david.jpg',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

### CSS (TeamSection.css)

You can create a CSS file named `TeamSection.css` to style the component. Here's an example of how you might style it:

/* components/TeamSection.css */

.team-section {
  background-color: #000;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
}

.team-title {
  font-size: 2.5rem;
  color: #ff69b4; /* Pink color */
  margin-bottom: 30px;
}

.team-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.team-member {
  background-color: #222;
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  transition: transform 0.3s;
}

.team-member:hover {
  transform: scale(1.05);
}

.team-member-image {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
}

.team-member-name {
  font-size: 1.5rem;
  color: #ff69b4; /* Pink color */
}

.team-member-role {
  font-size: 1rem;
  color: #ccc;
}

### Notes
- Make sure to replace the image paths in the `teamMembers` array with the actual paths to your team member images.
- You can adjust the styles in the CSS file to better fit your design preferences.