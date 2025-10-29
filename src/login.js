import React from 'react';
import Swal from "sweetalert2";
import Axios from 'axios';

function Login() {
  function postdata(e) {
    e.preventDefault(); // prevent form reload

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    Axios.post('http://localhost:2828/api/verify', {
      email: email,
      password: password
    })
    .then((response) => {
      if (response.data.message) {
        Swal.fire({
          title: 'Oops…',
          text: response.data.message,
          icon: 'warning',
          confirmButtonText: 'OK',
        }).then(() => {
          window.location = '/login';
        });
      } else {
        const obj = {
          sname: response.data[0].name,
          email: email
        };
        localStorage.setItem('mydata', JSON.stringify(obj));
          Swal.fire({
            title: 'Success!',
            text: `Welcome ${response.data[0].name}`,
            icon: 'success',
            confirmButtonText: 'Continue',
          }).then(() => {
            window.location = '/';  // redirect to home
          });
      }
    })
    .catch((err) => {
      console.error("Login error:", err);
      Swal.fire({
        title: 'Error!',
        text: 'Login failed. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
  }

  return (
    <>
      <section className="w3l-about-breadcrumb text-left"></section>

      <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
        <form className="signin-form" onSubmit={postdata}>
          <div className="input-grids">
            <div className="form-group">
              <input type="email" id="email" placeholder="Email*" className="contact-input" required />
            </div>
            <div className="form-group">
              <input type="password" id="password" placeholder="Password*" className="contact-input" required />
            </div>
          </div>
          <div className="text-left">
            <button type="submit" className="btn btn-style btn-primary">Login</button>
            <br />
            <a href="/register">Register Here</a>
            <br />
            <a href="/forgotpass" style={{ color: "#007bff", fontSize: "14px" }}>Forgot password? Click here.
            </a>
          </div>

        </form>
      </div>
    </>
  );
}

export default Login;