import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import classes from './myProfile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.data);

  const myReservedRockets = useMemo(
    () => rockets.filter((rocket) => rocket.reserved === true),
    [],
  );

  return (
    <div className="profile-container">
      <div className={classes.column}>
        <h4>Missions</h4>
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
