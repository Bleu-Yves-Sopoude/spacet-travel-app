import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rocket = () => {
  const rocketsdata = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      {rocketsdata.loading ? (
        <div>Loading ...</div>
      ) : (
        <ul className="rocketsList">
          {rocketsdata.data.map((e) => (
            <>
              <li key={e.id}>
                {e.flickr_images && <img src={e.flickr_images} alt={e.name} />}
                <h2>{e.name}</h2>
                <p>
                  {!e.reserved && <p style={{background:"red", padding:"40px"}}>Reserved</p>} {e.description}
                </p>
              </li>
              <hr/>
            </>

          ))}
        </ul>
      )}
    </div>
  );
};

export default Rocket;
