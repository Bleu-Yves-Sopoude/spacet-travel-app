import React from "react";
import { useEffect } from "react";
import "./Rocket.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets } from "../redux/rockets/rocketsSlice.js";

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
          {rocketsdata.data.map((rocket) => {
            return (
              <li key={rocket.id}>
                <div className="rocketImgageContainer">
                  <img src={rocket.flickr_images} alt="" />
                </div>

                <div className="rocketDescription">
                  <h2>{rocket.name} </h2>
                  <p>
                    <>{rocket.reserved && <span>reserved</span>}</>
                    {rocket.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Rocket;
