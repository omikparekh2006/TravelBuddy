import React from 'react';

function AddDestination() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Data captured. We'll implement backend later.");
  }

  return (
    <>
      <section className="w3l-about-breadcrumb text-left"></section>
      <div className="col-lg-6 mt-lg-0 mt-5 contact-right">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-grids">
            <div className="form-group">
              <input type="text" id="name" placeholder="Destination Name*" className="contact-input" required />
            </div>
            <div className="form-group">
              <input type="text" id="city" placeholder="City*" className="contact-input" required />
            </div>
            <div className="form-group">
              <input type="number" id="price" placeholder="Price*" className="contact-input" required />
            </div>
            <div className="form-group">
              <textarea id="description" placeholder="Description*" className="contact-input" required></textarea>
            </div>
            <div className="form-group">
              <input type="text" id="image" placeholder="Image URL or Path*" className="contact-input" required />
            </div>
          </div>
          <div className="text-left">
            <button type="submit" className="btn btn-style btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddDestination;