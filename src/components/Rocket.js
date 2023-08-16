import { React, useEffect } from "react";
import classes from "./Rocket.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRockets } from "../redux/rockets/rocketsSlice";
import { bookRocket as bookrocketAction } from "../redux/rockets/rocketsSlice";

const Rocket = () => {
  const rocketsdata = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const bookRocket = (id) => {
    dispatch(bookrocketAction(id));
  };

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
                  <button
                    className={rocket.reserved && classes.cancel}
                    onClick={() => bookRocket(rocket.id)}
                  >
                    {" "}
                    {rocket.reserved ? <>cancel reservation </> : <>reserve</>}
                  </button>
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
