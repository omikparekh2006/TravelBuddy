import React from 'react';
import Axios from 'axios';

function ForgotPass() {
  const forgotpass =()=>{
    const email = document.getElementById("email").value;

    Axios.post("http://localhost:2828/api/forgotpass", {
      email: email,
    })
    .then((response) => {
      if(response.data.message){
      alert("Email sent to server.");
      window.location="/forgotpass";
      }
      else{
        alert("success");
        window.location="/log";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to send email.");
    });
  }

  return (
    <>
      <section className="w3l-about-breadcrumb text-left"></section>

      <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
        <form className="signin-form">
          <div className="input-grids">
            <div className="form-group">
              <input type="email" id="email" placeholder="Enter your email*" className="contact-input" required />
            </div>
          </div>
          <div className="text-left">
            <button type="button" className="btn btn-style btn-primary" onClick={forgotpass}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgotPass;