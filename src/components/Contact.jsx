import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact our Sales team</h1>
      <p></p>
      {/* ... otros elementos ... */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Company email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" required />
        </div>
        <div className="form-group">
          <label htmlFor="enquiry">What's your enquiry about? *</label>
          <select id="enquiry" required>
            <option value="">Please select an option</option>
            <option value="sales">Events</option>
            {/* ... otras opciones ... */}
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;