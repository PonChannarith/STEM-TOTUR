import React from "react";

function Profile({ profileDetails, login, logout }) {
  return (
    <div className="profile-container">
      {profileDetails ? (
        <div className="profile-details">
          <img
            src={profileDetails.picture}
            alt="Profile Avatar"
            className="profile-avatar"
          />
          <div className="profile-content">
            <h3>{profileDetails.name}</h3>
            <h5>{profileDetails.email}</h5>
          </div>
          <button className="profile-button" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="landing-container">
          <div className="landing-icon">
            <h1>🎉</h1>
          </div>
          <h4>Sign in to create a profile!</h4>
          <button onClick={login} className="login-button">
            ⚡ Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
