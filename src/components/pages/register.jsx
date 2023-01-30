import React, { useState } from "react";
import classes from "../styles/register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const emailEventHandler = (e) => {
    setEmail(e.target.value);
  };
  const usernameEventHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordEventHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className={classes.register}>
      <h2 className={classes.register__title}>Log-in / Sign up Page</h2>
      <form className={classes.register__form}>
        <label className={classes.register__label} htmlFor="email">
          email
        </label>
        <input
          id="email"
          className={classes.register__input}
          type="text"
          onChange={emailEventHandler}
          value={email}
        />
        <label className={classes.register__label} htmlFor="username">
          username
        </label>
        <input id="username" className={classes.register__input} type="text" />
        <label className={classes.register__label} htmlFor="password">
          password
        </label>
        <input id="password" className={classes.register__input} type="text" />
        <button className={classes.register__btn}>Sign up</button>
        <div className={classes.register__box}>
          <a href="#!" target="_blank" rel="noopener">
            forgot password
          </a>
          <span className={classes.register__span}>/</span>
          <a
            className={classes.register__link}
            href="#!"
            target="_blank"
            rel="noopener"
          >
            login
          </a>
        </div>
      </form>
    </section>
  );
};

export default Register;
