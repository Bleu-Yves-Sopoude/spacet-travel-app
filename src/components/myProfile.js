import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import './myProfile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.data);
  const missions = useSelector((state) => state.missions.missions);

  const myReservedRockets = useMemo(
    () => rockets.filter((rocket) => rocket.reserved === true),
    [],
  );

  const myjoinedmissions = useMemo(
    () => missions.filter((mission) => mission.reserved === true),
    [],
  );

  return (
    <div className="profile-container">
      <div className="column">
        <h2 className="mission-heading">My Missions</h2>
        {myjoinedmissions.length < 1 ? (
          <p className="message">No joined missions.</p>
        ) : (
          <ul className="list">
            {myjoinedmissions.map((mission) => (
              <li className="mission-element" key={mission.mission_id}>
                <h4 className="missions-name">{mission.mission_name}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="column">
        <h2 className="mission-heading">My Rockets</h2>
        {myReservedRockets.length < 1 ? (
          <p className="message">No reserved rockets.</p>
        ) : (
          <ul className="list">
            {myReservedRockets.map((rocket) => (
              <li className="mission-element" key={rocket.id}>
                <h4 className="missions-name">{rocket.name}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
