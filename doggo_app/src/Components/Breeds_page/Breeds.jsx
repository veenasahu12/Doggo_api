import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import BreedStyles from "./Breeds.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const API_URL = "https://dog.ceo/api/breeds/list/all";

const Breeds = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        //   console.log(res?.data?.message);
        setData(res?.data?.message);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [setData]);

  const logout = () => {
    localStorage.setItem("isAuth", false);
    navigate("/");
  };

  return (
    <div className="App" data-testid="app">
      <h1>List Of All Breeds</h1>
      <button className={BreedStyles.logout_btn} onClick={logout}>Logout</button>
      <div className={BreedStyles.main}>
        {Object.keys(data).map((item, i) => (
          <div className={BreedStyles.mapping_list}>
            {data[item]?.length == 0 && (
              <Link key={i} to={`${item}`} >
                {item}
              </Link>
            )}
            {data[item]?.length > 0 &&
              data[item].map((v) => {
                return (
                  <Link
                    key={v}
                    to={`${v} ${item}`} 
                  >
                    {v} {item}
                  </Link>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breeds;
