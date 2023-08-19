import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mission.css';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { fetchmissions, joinmission } from '../redux/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) {
       dispatch(fetchmissions());
    } },
    []);

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
    <div className="table-container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th style={{ width: '180px' }}>Mission</th>
            <th>Description</th>
            <th style={{ width: '150px' }}>Status</th>
            <th style={{ width: '180px' }}>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td><h5>{mission.mission_name}</h5></td>
              <td className="working"><p>{mission.description}</p></td>
              <td className="working">
                {mission.reserved ? (
                  <h5 className="Bag"><Badge bg="primary">Active Member</Badge></h5>
                ) : (
                  <h5 className="Bag"><Badge bg="secondary">NOT A MEMBER</Badge></h5>
                )}
              </td>
              <td className="working">
                <div className="d-flex align-items-center justify-content-center btn-container">
                  <Button variant={mission.reserved ? 'outline-danger' : 'outline-primary'} onClick={() => handlejoinmission(mission.mission_id, mission.reserved)}>
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Mission;
