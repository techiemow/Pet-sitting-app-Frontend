import React from 'react'

const Contact = () => {
  return (
<div className="container-fluid pt-5">
  <div className="d-flex flex-column text-center mb-5 pt-5">
    <h4 className="text-secondary mb-3">Contact Us</h4>
    <h1 className="display-4 m-0">Contact For <span className="text-primary">Any Query</span></h1>
  </div>
  <div className="row justify-content-center">
    <div className="col-12 col-sm-8 mb-5">
      <div className="contact-form">
        <div id="success"></div>
        <form name="sentMessage" id="contactForm" noValidate>
          <div className="control-group">
            <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <textarea className="form-control p-4" rows="6" id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div>
            <button className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    <div className="col-12 mb-n2 p-0">
      <iframe 
        style={{ width: '100%', height: '500px', border: '0' }} 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14846.752957222276!2d77.607872!3d12.92792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16b6a9c2e591%3A0x4e9d7cce91dd70c!2sKoramangala%2C%20Bangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" 
        frameBorder="0" 
        allowFullScreen="" 
        aria-hidden="false" 
        tabIndex="0">
      </iframe>
    </div>
  </div>
</div>

  )
}

export default Contact