import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { fetchmissions, joinmission } from '../redux/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(fetchmissions());
  }, [dispatch]);

  const handlejoinmission = (missionId, reserved) => {
    if (reserved) {
      dispatch(joinmission({ missionId, reserved: false }));
    } else {
      dispatch(joinmission({ missionId, reserved: true }));
    }
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
      <Table striped bordered hover size="sm" className="margin-30">
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
              <td>
                {mission.reserved ? (
                  <h5><Badge bg="success">Active Member</Badge></h5>
                ) : (
                  <h5><Badge bg="primary">NOT A MEMBER</Badge></h5>
                )}
              </td>
              <td className="d-flex align-items-center"><Button variant="outline-dark" onClick={() => handlejoinmission(mission.mission_id, mission.reserved)}>{mission.reserved ? 'Leave Mission' : 'Join Mission'}</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Mission;
