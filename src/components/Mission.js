import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchmissions } from '../redux/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchmissions());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {missions.map((mission) => (
          <li key={mission.mission_id}>
            <h5>{mission.mission_name}</h5>
            <p>{mission.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mission;
