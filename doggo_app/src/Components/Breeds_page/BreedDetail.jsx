import React,{ useState } from 'react'
import { useEffect } from 'react';
import BreedStyles from "./Breeds.module.css";
import { useNavigate } from "react-router";

const BreedDetail = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        return response.json()
      })
      .then(data => {
        //console.log(data)
        setData(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const logout = () => {
    localStorage.setItem("isAuth", false);
    navigate("/");
  };

  return (
    <div className="App" data-testid="app">
    <h1>Breeds Details Page</h1>
    <button className={BreedStyles.logout_btn} onClick={logout}>Logout</button>
    <div id="post-container" className={BreedStyles.mapping_data}>
        <img src={data?.message} className={BreedStyles.image} alt="missing" />
    </div>
  </div>
  );
};

export default BreedDetail;
