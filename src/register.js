import React from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';

function Register() {

  function postdata(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !mobile || !password) {
    alert("All fields are required!");
    return;
  }

  Axios.post("http://127.0.0.1:2828/api/insert", {
    name,
    email,
    mobile,
    password
  })
  .then((response) => {
    Swal.fire({
      title: 'Success!',
      text: 'User Registered!!!',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      window.location = "/log";
    });
  })
  .catch((error) => {
    console.error("Registration error:", error);
    alert("Registration failed: " + (error.response?.data?.message || error.message));
  });
}


  return (
    <>
      <section className="w3l-about-breadcrumb text-left"></section>

      <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
        <form className="signin-form" onSubmit={postdata}>
          <div className="input-grids">
            <div className="form-group">
              <input type="text" id="name" placeholder="Name*" className="contact-input" />
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder="Email*" className="contact-input" required />
            </div>
            <div className="form-group">
              <input type="number" id="mobile" placeholder="Mobile*" className="contact-input" />
            </div>
            <div className="form-group">
              <input type="password" id="password" placeholder="Password*" className="contact-input" />
            </div>
          </div>
          <div className="text-left">
            <button type="submit" className="btn btn-style btn-primary">Register</button>
            <a href="./log">Login Here</a>
          </div>
        </form>
      </div>
    </>  
  );
}

export default Register;