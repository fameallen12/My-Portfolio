import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import emailjs from 'emailjs-com';
import 'react-phone-input-2/lib/style.css';

function Contact() {
  const [phone, setPhone] = useState('');

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page reload

    emailjs.sendForm(
      'service_m2te0jp',     // replace with your service ID
      'template_7449lft',    // replace with your template ID
      e.target,              // the form itself
      're6fVHh1f-NWBmSXP'      // replace with your public key
    )
    .then(
      (result) => {
        alert('✅ Message sent successfully!');
        e.target.reset(); // clear form after sending
        setPhone('');     // reset phone input
      },
      (error) => {
        alert('❌ Failed to send message.');
        console.log(error.text);
      }
    );
  };

  return (
    <section
      id="contact"
      className="contact"
      style={{
        backgroundImage: 'url(/assets/geometric-shape-doodle-seamless-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form className="contact-form" onSubmit={sendEmail}>
        <h2>Send Me a Message Today</h2>

        <div className="form-row">
          <input type="text" name="name" placeholder="Name" className="input name" required />

          <PhoneInput
            country={'gh'}
            value={phone}
            onChange={setPhone}
            placeholder="Phone number"
            inputStyle={{
              width: '100%',
              height: '50px',
              paddingLeft: '60px',
              borderRadius: '10px',
              border: '1px solid #ddd',
              fontSize: '16px',
            }}
            buttonStyle={{
              border: 'none',
              background: 'transparent',
              top: '50%',
              transform: 'translateY(-50%)',
              left: '15px',
            }}
          />
          <input type="hidden" name="phone" value={phone} />
        </div>

        <input type="email" name="email" placeholder="Email" className="input full-width" required />
        <textarea name="message" placeholder="Message here" className="input full-width" required></textarea>

        <button className="send-btn" type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
