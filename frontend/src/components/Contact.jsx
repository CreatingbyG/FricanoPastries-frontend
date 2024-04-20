import React from 'react';

const Contact = () => {
  return (
    <div className="contact__container">
      <h1 className="contact__container-title">Contact our Sales team</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input className="checkout__box" type="text" id="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input className="checkout__box" type="text" id="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Company email</label>
          <input className="checkout__box" type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input className="checkout__box" type="text" id="company" required />
        </div>
        <div className="form-group">
          <label htmlFor="enquiry">What's your enquiry about? *</label>
          <select id="enquiry" required>
            <option value="">Please select an option</option>
            <option value="sales">Events</option>
          </select>
        </div>
        <div className="form-group">
          <button className="contact__btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;