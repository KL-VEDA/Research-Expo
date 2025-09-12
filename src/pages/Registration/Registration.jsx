import React, { useState, useEffect, useRef } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { PUBLIC } from "../../connectivity/routes";
import KLIRDImage from "./../../assets/images/IRD.png";

const MAX_MEMBERS_LIMIT = 5;

const steps = [
  "Team Details",
  "Team Leader",
  "Team Members",
  "Review",
  "Success",
];

function StepProgress({ currentStep }) {
  return (
    <div className="step-progress-container">
      {steps.map((stepName, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div
            key={stepName}
            className={`step-item ${isCompleted ? "completed" : ""} ${
              isActive ? "active" : ""
            }`}
          >
            <div className="step-number">{stepNumber}</div>
            <div className="step-name">{stepName}</div>
            {index !== steps.length - 1 && <div className="step-divider" />}
          </div>
        );
      })}
    </div>
  );
}

function Registration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [teamData, setTeamData] = useState({
    team_name: "",
    paper_drive_link: "",
    password: "",
    confirm_password: "",
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

  const cardRef = useRef(null);

  useEffect(() => {
    if (registrationSuccess && teamDetails) {
      setTimeout(() => {
        handleDownload();
      }, 300);
    }
  }, [registrationSuccess, teamDetails]);

  const handleTeamChange = (e) => {
    setTeamData({ ...teamData, [e.target.name]: e.target.value });
  };

  const handleMemberChange = (index, e) => {
    const updatedMembers = [...members];
    updatedMembers[index][e.target.name] = e.target.value;
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
    } else {
      setErrorModal({ show: true, message: `Max ${MAX_MEMBERS_LIMIT} members allowed.` });
    }
  };

  const removeMember = (index) => {
    if (index === 0) {
      setErrorModal({ show: true, message: "Cannot remove the team leader." });
      return;
    }
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  const validateStep = () => {
    if (step === 1) {
      if (!teamData.team_name.trim() || !teamData.paper_drive_link.trim() || !teamData.password) {
        setErrorModal({ show: true, message: "Please fill all Team Details fields." });
        return false;
      }
      if (teamData.password !== teamData.confirm_password) {
        setErrorModal({ show: true, message: "Password and Confirm Password do not match." });
        return false;
      }
      return true;
    }
    if (step === 2) {
      const leader = members[0];
      if (!leader.name.trim() || !leader.email.trim() || !leader.contact.trim()) {
        setErrorModal({ show: true, message: "Please fill all Team Leader fields." });
        return false;
      }
      return true;
    }
    if (step === 3) {
      for (let i = 1; i < members.length; i++) {
        const mem = members[i];
        if (
          mem.name.trim() === "" &&
          mem.email.trim() === "" &&
          mem.contact.trim() === ""
        ) {
          continue; // skip empty member
        }
        if (!mem.name.trim() || !mem.email.trim() || !mem.contact.trim()) {
          setErrorModal({
            show: true,
            message: `Please fill all required fields for member ${i + 1} or leave all blank.`,
          });
          return false;
        }
      }
      return true;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    const leaders = members.filter((m) => m.is_team_leader);
    if (leaders.length !== 1) {
      setErrorModal({ show: true, message: "Exactly one team leader must be selected." });
      return;
    }

    const payload = {
      team_name: teamData.team_name,
      paper_drive_link: teamData.paper_drive_link,
      password: teamData.password,
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
        setStep(5);
      } else {
        setErrorModal({ show: true, message: response.message });
      }
    } catch {
      setErrorModal({ show: true, message: "Server error. Try again later." });
    }
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    const buttons = cardRef.current.querySelectorAll(".download-btn, .reset-btn");
    buttons.forEach((btn) => (btn.style.display = "none"));

    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement("a");
    link.download = `${teamDetails.team_code}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    buttons.forEach((btn) => (btn.style.display = "inline-block"));
  };

  const resetRegistration = () => {
    setRegistrationSuccess(false);
    setTeamDetails(null);
    setTeamData({ team_name: "", paper_drive_link: "", password: "", confirm_password: "" });
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
    setStep(1);
  };

  return (
    <>
    <div className="registration-container">
      <h1 className="registration-title">Registrations are not opened.</h1>
      </div>
    </>
  )

  return (
    <div className="registration-container">
      <h1 className="registration-title">📝 Team Registration</h1>

      <StepProgress currentStep={step} />

      {errorModal.show && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>⚠️ Error</h3>
            <p>{errorModal.message}</p>
            <button onClick={() => setErrorModal({ show: false, message: "" })}>Close</button>
          </div>
        </div>
      )}

      {/* Step 1 - Team Details */}
      {step === 1 && (
        <form
          className="registration-form"
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
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
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={teamData.confirm_password}
            onChange={handleTeamChange}
            required
          />

          <div className="step-buttons">
            <button type="submit" className="register-btn">
              Next →
            </button>
          </div>
        </form>
      )}

      {/* Step 2 - Team Leader */}
      {step === 2 && (
        <form
          className="registration-form"
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
          <h3>👤 Team Leader Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={members[0].name}
            onChange={(e) => handleMemberChange(0, e)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={members[0].email}
            onChange={(e) => handleMemberChange(0, e)}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={members[0].contact}
            onChange={(e) => handleMemberChange(0, e)}
            required
          />
          <input
            type="text"
            name="degree_program"
            placeholder="Degree Program"
            value={members[0].degree_program}
            onChange={(e) => handleMemberChange(0, e)}
          />
          <input
            type="text"
            name="year_or_status"
            placeholder="Year or Status"
            value={members[0].year_or_status}
            onChange={(e) => handleMemberChange(0, e)}
          />
          <input
            type="text"
            name="institution"
            placeholder="Institution / University"
            value={members[0].institution}
            onChange={(e) => handleMemberChange(0, e)}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={members[0].role}
            onChange={(e) => handleMemberChange(0, e)}
          />

          <div className="step-buttons">
            <button type="button" className="back-btn" onClick={prevStep}>
              ← Back
            </button>
            <button type="submit" className="register-btn">
              Next →
            </button>
          </div>
        </form>
      )}

      {/* Step 3 - Members */}
      {step === 3 && (
        <div className="registration-form">
          <h3>👥 Add Team Members</h3>
          {members.slice(1).map((member, idx) => (
            <div key={idx + 1} className="member-card">
              <h4>Member {idx + 2}</h4>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={member.name}
                onChange={(e) => handleMemberChange(idx + 1, e)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={member.email}
                onChange={(e) => handleMemberChange(idx + 1, e)}
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={member.contact}
                onChange={(e) => handleMemberChange(idx + 1, e)}
              />
              <input
                type="text"
                name="degree_program"
                placeholder="Degree Program"
                value={member.degree_program}
                onChange={(e) => handleMemberChange(idx + 1, e)}
              />
              <input
                type="text"
                name="year_or_status"
                placeholder="Year or Status"
                value={member.year_or_status}
                onChange={(e) => handleMemberChange(idx + 1, e)}
              />
              <input
                type="text"
                name="institution"
                placeholder="Institution / University"
                value={member.institution}
                onChange={(e) => handleMemberChange(idx + 1, e)}
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={member.role}
                onChange={(e) => handleMemberChange(idx + 1, e)}
              />
              <button
                className="remove-member-btn"
                onClick={() => removeMember(idx + 1)}
              >
                Remove Member
              </button>
            </div>
          ))}

          {members.length < MAX_MEMBERS_LIMIT && (
            <button className="add-member-btn" onClick={addMember}>
              + Add Member
            </button>
          )}

          <div className="step-buttons">
            <button className="back-btn" onClick={prevStep}>
              ← Back
            </button>
            <button className="register-btn" onClick={nextStep}>
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Step 4 - Review */}
      {step === 4 && (
        <div className="review-page">
          <h3>📝 Review Your Details</h3>
          <div className="review-section">
            <h4>Team Details</h4>
            <p><strong>Team Name:</strong> {teamData.team_name}</p>
            <p>
              <strong>Paper Drive Link:</strong>{" "}
              <a href={teamData.paper_drive_link} target="_blank" rel="noreferrer">
                {teamData.paper_drive_link}
              </a>
            </p>
          </div>
          <div className="review-section">
            <h4>Team Members</h4>
            {members.map((member, i) => (
              <div key={i} className="review-member-card">
                <h5>{member.is_team_leader ? "Team Leader" : `Member ${i + 1}`}</h5>
                <p><strong>Name:</strong> {member.name || "N/A"}</p>
                <p><strong>Email:</strong> {member.email || "N/A"}</p>
                <p><strong>Contact:</strong> {member.contact || "N/A"}</p>
                <p><strong>Degree Program:</strong> {member.degree_program || "N/A"}</p>
                <p><strong>Year/Status:</strong> {member.year_or_status || "N/A"}</p>
                <p><strong>Institution:</strong> {member.institution || "N/A"}</p>
                <p><strong>Role:</strong> {member.role || "N/A"}</p>
              </div>
            ))}
          </div>
          <div className="step-buttons">
            <button className="back-btn" onClick={prevStep}>
              ← Back
            </button>
            <button className="register-btn" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </div>
      )}

      {/* Step 5 - Success (Final Card) */}
      {step === 5 && registrationSuccess && teamDetails && (
        <>
        <center>
          <h2>Registration Successful 🎉</h2>
        </center>
          
        <div className="team-card" ref={cardRef}>
          <p className="top-line">REGISTRATION CARD | 2K25</p>
          <img src={KLIRDImage} alt="KLIRD" className="ird-logo-centered" />
          <h2>KONERU LAKSHMIAH EDUCATION <br /> FOUNDATION</h2>
          <h3>RESEARCH EXPO - 2025 | IRD</h3>
          <h3><strong>{teamDetails.team_name}</strong></h3>
          <p>Code</p>
          <p><strong>{teamDetails.team_code}</strong></p>
        </div>

        <center>
          
          <div className="card-buttons">
            <button className="download-btn" onClick={handleDownload}>
              Download
            </button>
            &emsp;
            <button className="reset-btn" onClick={resetRegistration}>
              Register Another Team
            </button>
          </div>
        </center>
        </>
      )}
    </div>
  );
}

export default Registration;
