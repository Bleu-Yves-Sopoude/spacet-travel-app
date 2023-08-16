import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { fetchmissions, joinmission } from '../redux/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchmissions());
  }, [dispatch]);

  const handlejoinmission = (missionId) => {
    dispatch(joinmission(missionId));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td><h5>{mission.mission_name}</h5></td>
              <td><p>{mission.description}</p></td>
              <td><p>Coming Soon</p></td>
              <td className="d-flex align-items-center"><Button variant="outline-dark" onClick={() => handlejoinmission(mission.mission_id)}>Join Mission</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Mission;
