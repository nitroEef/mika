import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Service Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    
    // Replace with the actual WhatsApp number (include country code without + or spaces)
    const whatsappNumber = '+2348136340736'; // Change this to the actual number
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      info: '(123) 456-7890',
      subInfo: '24/7 Emergency Service'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      info: 'Health center area,',
      subInfo: 'Karmo, Abuja, Nigeria'
    },
    {
      icon: <Clock size={24} />,
      title: 'Working Hours',
      info: 'Mon - Sat: 7AM - 6PM',
      subInfo: 'Emergency: 24/7'
    }
  ];

  return (
    <div className="contact-wrapper">
      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-header">
            <div className="section-badge">Get In Touch</div>
            <h2 className="contact-title">
              Ready to Fix Your
              <br />
              <span className="title-gradient">Plumbing Issues?</span>
            </h2>
            <p className="contact-subtitle">
              Contact us today for a free quote or emergency service. Our expert team
              is ready to help you with all your plumbing needs.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info-grid">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">
                    {item.icon}
                  </div>
                  <h4 className="info-title">{item.title}</h4>
                  <p className="info-detail">{item.info}</p>
                  <p className="info-sub">{item.subInfo}</p>
                </div>
              ))}
            </div>

            <div className="contact-form-wrapper">
              <div className="form-header">
                <h3 className="form-title">Request a Quote</h3>
                <p className="form-description">
                  Fill out the form below and we'll contact you via WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="success-message">
                  <CheckCircle size={60} />
                  <h4>Opening WhatsApp!</h4>
                  <p>Your message has been prepared. Complete sending via WhatsApp.</p>
                </div>
              ) : (
                <div className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service">Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="Emergency Repair">Emergency Repair</option>
                        <option value="Leak Detection">Leak Detection</option>
                        <option value="Water Heater">Water Heater</option>
                        <option value="Bathroom Plumbing">Bathroom Plumbing</option>
                        <option value="Pipe Installation">Pipe Installation</option>
                        <option value="Maintenance">Maintenance</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your plumbing issue..."
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="button" className="submit-btn" onClick={handleSubmit}>
                    <Send size={20} />
                    Send via WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-logo">
                <div className="logo-icon-footer">💧</div>
                <span className="logo-text">ProPlumb</span>
              </div>
              <p className="footer-text">
                Professional plumbing services you can trust. Licensed, insured, and
                dedicated to excellence.
              </p>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 ProPlumb. All rights reserved.</p>
              <div className="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}