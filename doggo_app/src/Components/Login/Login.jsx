import React, { useState } from "react";
import styles from "./Login.module.css";
import { RiCloseLine } from "react-icons/ri";
import Register from "../Register/Register";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar";

const Login = ({ setIsOpen }) => {
  const [isOpensignup, setIsOpensignup] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    useremail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // console.log(form);
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // console.log(login);
    let find_user = users.find(v => v.useremail == form.useremail && v.password == form.password)
    if(find_user){
        alert("SIGN-IN Is Successful");
        localStorage.setItem("isAuth",true);
        navigate("/Breeds")
        return;
    }
      alert("Please fill the right credentials");
  };
  
//   useEffect(()=> {
//     let isAuth = localStorage.getItem("isAuth") || false;
//     if(isAuth){
//         navigate("/Breeds")
//     }
//   },[navigate])

  return (
    <>
    <Navbar />
      <div className={styles.darkBG}/>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Sign In</h5>
          </div>
          <button className={styles.closeBtn} >
            <RiCloseLine />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.inputBox}>
              <input
                type="email"
                placeholder="Email Address"
                name="useremail"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBox}>
              <input
                type="text"
                placeholder="Enter Password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.blackSignIn} onClick={handleSubmit}>
                SIGN IN
              </button>
            </div>
            <div className={styles.signupbtn}>
              <h5>Doesn't have an account?</h5>
              <div className={styles.links} onClick={() => setIsOpensignup(true)}>Sign Up</div>
              {isOpensignup && (
                <Register setIsOpensignup={setIsOpensignup} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
