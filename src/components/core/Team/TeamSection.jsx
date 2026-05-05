import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TeamSection.css";

const TeamSection = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // 🔥 Transform data to match UI
        const transformed = res.data.map((user) => ({
          name: user.name,
          role: user.company.name,
          email: user.email,

          // Fake but realistic fields
          experience: `${Math.floor(Math.random() * 5) + 1} Years`,
          tech: ["React", "Node", "Angular", "Vue"][
            Math.floor(Math.random() * 4)
          ]
        }));

        setTeam(transformed);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="team-section">
      <div className="team-container">

        <h2>
          Our <span>Software Team</span>
        </h2>

        <p className="team-sub">
          Meet the talented professionals behind our success.
        </p>

        <div className="team-table-wrapper">
          <table className="team-table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Experience</th>
                <th>Technology</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {team.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>{member.experience}</td>
                  <td>
                    <span className="tech-badge">
                      {member.tech}
                    </span>
                  </td>
                  <td>{member.email}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;