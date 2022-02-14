import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login2 = (props) => {

const navigate = useNavigate();
const handleSubmit = async (e) => {

  e.preventDefault();
  const user = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  console.log(props.user)
  await axios.post("/api/users/login", user);
  props.setUser(e.target.email.value)
  navigate('/myaccount');
};

  return (
    <div>
      <div className="login" style={{ padding: "100px" }}>
        <h2>Log In</h2>
        <form class="ui form" onSubmit={handleSubmit}>
          <div class="field">
            <label>E-Mail</label>
            <input type="text" name="email" placeholder="E-Mail" />
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>

          <button
            class="ui button"
            type="submit"
            style={{ marginBottom: "20px" }}
          >
            Submit
          </button>
        </form>
        <a href="/join">Create an Account</a>
      </div>
    </div>
  );
}

export default Login2