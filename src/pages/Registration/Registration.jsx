// ./Components/Registration/Registration.jsx
import React, { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import { PUBLIC } from "../../connectivity/routes";

function Registration() {
  const navigate = useNavigate();

  const [teamData, setTeamData] = useState({
    team_name: "",
    paper_drive_link: "",
  });

  const [members, setMembers] = useState([
    { name: "", contact: "", email: "", is_team_leader: true },
    { name: "", contact: "", email: "", is_team_leader: false },
  ]);

  const handleTeamChange = (e) => {
    setTeamData({ ...teamData, [e.target.name]: e.target.value });
  };

  const handleMemberChange = (index, e) => {
    const updatedMembers = [...members];
    updatedMembers[index][e.target.name] =
      e.target.name === "is_team_leader"
        ? e.target.checked
        : e.target.value;
    setMembers(updatedMembers);
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  const leaders = members.filter((m) => m.is_team_leader);
  if (leaders.length !== 1) {
    alert("Exactly one team leader must be selected.");
    return;
  }

  const payload = {
    ...teamData,
    members
  };

  const response = await PUBLIC.register(payload);

  if (response.success) {
    alert(`Registration successful! Your Team ID is ${response.team_id}`);
    navigate("/");
  } else {
    alert(`Error: ${response.message}`);
  }
};

  return (
    <div className="registration-container">
      <h1 className="registration-title">📝 Team Registration</h1>
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="team_name"
          placeholder="Team Name"
          value={teamData.team_name}
          onChange={handleTeamChange}
          required
        />
        <input
          type="url"
          name="paper_drive_link"
          placeholder="Paper Drive Link"
          value={teamData.paper_drive_link}
          onChange={handleTeamChange}
          required
        />

        <h3>👥 Team Members</h3>
        {members.map((member, index) => (
          <div key={index} className="member-section">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={member.name}
              onChange={(e) => handleMemberChange(index, e)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={member.email}
              onChange={(e) => handleMemberChange(index, e)}
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={member.contact}
              onChange={(e) => handleMemberChange(index, e)}
              required
            />
            <label>
              <input
                type="checkbox"
                name="is_team_leader"
                checked={member.is_team_leader}
                onChange={(e) => handleMemberChange(index, e)}
              />
              Team Leader
            </label>
          </div>
        ))}

        <button type="submit" className="register-btn">
          Submit Registration
        </button>
      </form>
    </div>
  );
}

export default Registration;
