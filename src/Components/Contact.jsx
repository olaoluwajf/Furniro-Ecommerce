import Features from './Features';
import Hero from './Hero';
import Logo from '../assets/logo.png';
import { FaLocationArrow, FaPhoneSquare, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Contact.css'; // new CSS file for styling

const contactInfo = [
  {
    icon: <FaLocationArrow />,
    title: 'Address',
    lines: [
      '235 rth SE Avenue, New',
      'York NY10000, United',
      'States',
    ],
  },
  {
    icon: <FaPhoneSquare />,
    title: 'Phone',
    lines: [
      'Mobile +(251) 964 - 762',
      'Hotline: +(251) 456-6789',
    ],
  },
  {
    icon: <FaTimesCircle />,
    title: 'Working Time',
    lines: [
      'Monday-Friday: 9:00-22:00',
      'Saturday-Sunday: 9:00-21:00',
    ],
  },
];

const Contact = () => {
  return (
    <div className="contact-container">
      <Hero PageName="Contact" img={Logo} />

      <div className="contact-main">
        <div className="contact-header">
          <h1>Get In Touch With Us</h1>
          <p>
            For More Information About Our Product & Services Please Feel Free
            to Drop Us An Email. Our Staff Are Always There To Help You Out.
            Do Not Hesitate!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((item, idx) => (
              <div className="info-card" key={idx}>
                <div className="info-icon">{item.icon}</div>
                <div className="info-text">
                  <h2>{item.title}</h2>
                  {item.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form">
            <label>Your Name</label>
            <input type="text" placeholder="Abc" />

            <label>Email Address</label>
            <input type="text" placeholder="Abc@def.com" />

            <label>Subject</label>
            <input type="text" placeholder="This is optional" />

            <label>Message</label>
            <textarea placeholder="I would like to ask" rows="5"></textarea>

            <Link className="submit-btn" to="#">
              Submit
            </Link>
          </div>
        </div>
      </div>

      <Features />
    </div>
  );
};

export default Contact;
