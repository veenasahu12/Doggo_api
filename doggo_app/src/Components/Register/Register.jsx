import React, { useState } from "react";
import styles from "./Register.module.css";
import { RiCloseLine } from "react-icons/ri";
import Login from "../Login/Login";

const Register = ({ setIsOpensignup }) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleSubmit = () => {
    // console.log(form)
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let find_user = users.find(v => v.useremail == form.useremail )
    if(find_user){
        alert("email is already used");
        return;
    }
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account Is Created Successfully");
    
  };
  return (
    <>
      <div className={styles.darkBG} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Sign UP</h5>
          </div>
          <button className={styles.closeBtn}>
            <RiCloseLine />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.inputBox}>
              <input
                name="useremail"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputBox}>
              <input
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.blackSignIn} onClick={handleSubmit}>
                SIGN UP
              </button>
            </div>
            <div className={styles.signupbtn}>
              <h5>Already have an account?</h5>
              <div className={styles.links} onClick={() => setIsOpen(true)}>Sign IN</div>
              {isOpen && <Login setIsOpen={setIsOpen} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
