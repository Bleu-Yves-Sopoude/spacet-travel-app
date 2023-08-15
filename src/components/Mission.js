import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchmissions } from '../redux/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchmissions());
  }, [dispatch]);
  return (
    <div>
    <h4>Missions</h4>
  </div>
  );
};

export default Mission;
