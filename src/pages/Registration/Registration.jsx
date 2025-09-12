import React, { useState, useEffect } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { PUBLIC } from "../../connectivity/routes";
import KLIRDImage from "./../../assets/images/IRD.png";

const MAX_MEMBERS_LIMIT = 5;

function Registration() {
  const navigate = useNavigate();

  const [teamData, setTeamData] = useState({
    team_name: "",
    paper_drive_link: "",
    password: "",
  });

  const [members, setMembers] = useState([
    {
      name: "",
      contact: "",
      email: "",
      is_team_leader: true,
      degree_program: "",
      year_or_status: "",
      institution: "",
      role: "",
    },
  ]);

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [teamDetails, setTeamDetails] = useState(null);
  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  useEffect(() => {
    const autoDownload = async () => {
      if (registrationSuccess && teamDetails) {
        await new Promise((res) => setTimeout(res, 300));
        const canvas = await html2canvas(document.getElementById("certificate-canvas"));
        const link = document.createElement("a");
        link.download = `${teamDetails.team_code}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
    };
    autoDownload();
  }, [registrationSuccess, teamDetails]);

  const handleTeamChange = (e) => {
    setTeamData({ ...teamData, [e.target.name]: e.target.value });
  };

  const handleMemberChange = (index, e) => {
    const updatedMembers = [...members];

    if (e.target.name === "is_team_leader" && index !== 0) return;

    updatedMembers[index][e.target.name] =
      e.target.name === "is_team_leader" ? e.target.checked : e.target.value;

    if (e.target.name === "is_team_leader" && e.target.checked && index === 0) {
      updatedMembers.forEach((m, i) => {
        m.is_team_leader = i === 0;
      });
    }

    setMembers(updatedMembers);
  };

  const addMember = () => {
    if (members.length < MAX_MEMBERS_LIMIT) {
      setMembers([
        ...members,
        {
          name: "",
          contact: "",
          email: "",
          is_team_leader: false,
          degree_program: "",
          year_or_status: "",
          institution: "",
          role: "",
        },
      ]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const leaders = members.filter((m) => m.is_team_leader);
    if (leaders.length !== 1) {
      setErrorModal({ show: true, message: "Exactly one team leader must be selected." });
      return;
    }

    const payload = {
      ...teamData,
      members,
    };

    try {
      const response = await PUBLIC.register(payload);

      if (response.success) {
        setTeamDetails({
          team_name: teamData.team_name,
          team_code: response.team_code,
          team_id: response.team_id,
        });
        setRegistrationSuccess(true);
        setTeamData({ team_name: "", paper_drive_link: "", password: "" });
        setMembers([
          {
            name: "",
            contact: "",
            email: "",
            is_team_leader: true,
            degree_program: "",
            year_or_status: "",
            institution: "",
            role: "",
          },
        ]);
      } else {
        setErrorModal({ show: true, message: response.message });
      }
    } catch (err) {
      setErrorModal({ show: true, message: "Server error occurred. Please try again later." });
    }
  };

  const handleDownload = async () => {
    const canvas = await html2canvas(document.getElementById("certificate-canvas"));
    const link = document.createElement("a");
    link.download = `${teamDetails.team_code}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const resetRegistration = () => {
    setRegistrationSuccess(false);
    setTeamDetails(null);
    setTeamData({ team_name: "", paper_drive_link: "", password: "" });
    setMembers([
      {
        name: "",
        contact: "",
        email: "",
        is_team_leader: true,
        degree_program: "",
        year_or_status: "",
        institution: "",
        role: "",
      },
    ]);
  };

  return (
    <div className="registration-container">
      <h1 className="registration-title">📝 Team Registration</h1>

      {errorModal.show && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>⚠️ Error</h3>
            <p>{errorModal.message}</p>
            <button onClick={() => setErrorModal({ show: false, message: "" })}>Close</button>
          </div>
        </div>
      )}

      {!registrationSuccess ? (
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
          <input
            type="password"
            name="password"
            placeholder="Create Team Password"
            value={teamData.password}
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
              <input
                type="text"
                name="degree_program"
                placeholder="Degree Program (e.g., B.Tech, M.Tech, PhD, Faculty)"
                value={member.degree_program}
                onChange={(e) => handleMemberChange(index, e)}
              />
              <input
                type="text"
                name="year_or_status"
                placeholder="Year or Status (e.g., 3rd Year, Completed, N/A)"
                value={member.year_or_status}
                onChange={(e) => handleMemberChange(index, e)}
              />
              <input
                type="text"
                name="institution"
                placeholder="Institution / University"
                value={member.institution}
                onChange={(e) => handleMemberChange(index, e)}
              />
              <input
                type="text"
                name="role"
                placeholder="Role (e.g., Student, Faculty, Professor)"
                value={member.role}
                onChange={(e) => handleMemberChange(index, e)}
              />
              {index === 0 && (
                <>
                  <span className="leader-badge">Leader</span>
                  <label>
                    <input
                      type="checkbox"
                      name="is_team_leader"
                      checked={member.is_team_leader}
                      onChange={(e) => handleMemberChange(index, e)}
                      disabled
                    />
                    Team Leader
                  </label>
                </>
              )}
            </div>
          ))}

          {members.length < MAX_MEMBERS_LIMIT && (
            <button type="button" className="add-member-btn" onClick={addMember}>
              ➕ Add Member
            </button>
          )}

          <button type="submit" className="register-btn">
            Submit Registration
          </button>
        </form>
      ) : (
        <div className="certificate-container">
          <div id="certificate-canvas" className="certificate">
            <img src={KLIRDImage} alt="IRD Logo" className="ird-logo-centered" />
            <h2>KONERU LAKSHMIAH EDUCATION <br />FOUNDATION</h2>
            <h3>RESEARCH EXPO 2025 | IRD</h3>
            <i>TEAM CARD</i>
            <br />
            <br />
            <p><strong>Team Name:</strong> {teamDetails.team_name}</p>
            <p><strong>Team Code:</strong> {teamDetails.team_code}</p>
          </div>
          <p className="disclaimer">
            ⚠️ Please ensure you have downloaded this certificate. Refreshing the page will lose this data.
          </p>
          <button onClick={handleDownload} className="download-btn">
            📥 Download Again
          </button>
          <button onClick={resetRegistration} className="register-another-btn">
            🔁 Register Another Team
          </button>
        </div>
      )}
    </div>
  );
}

export default Registration;
