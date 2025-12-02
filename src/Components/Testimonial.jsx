import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonial.css';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'Los Angeles, CA',
      rating: 5,
      text: 'Absolutely fantastic service! They responded to our emergency leak at 2 AM and had it fixed within hours. Professional, courteous, and incredibly skilled. Highly recommend!',
      image: '👩'
    },
    {
      name: 'Michael Chen',
      role: 'Property Manager',
      location: 'San Diego, CA',
      rating: 5,
      text: 'We use them for all our properties. Their maintenance plans have saved us thousands in potential damages. The team is always punctual and their work is top-notch.',
      image: '👨'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Owner',
      location: 'Orange County, CA',
      rating: 5,
      text: 'They completed a full commercial repiping project with minimal disruption to our business. The quality of work exceeded our expectations. True professionals!',
      image: '👩‍💼'
    },
    {
      name: 'David Thompson',
      role: 'Homeowner',
      location: 'Long Beach, CA',
      rating: 5,
      text: 'Our bathroom renovation was flawless. They worked efficiently, kept everything clean, and the final result is stunning. Worth every penny!',
      image: '👨‍💼'
    },
    {
      name: 'Jessica Martinez',
      role: 'Restaurant Owner',
      location: 'Pasadena, CA',
      rating: 5,
      text: 'Quick response time and exceptional service. They fixed our kitchen plumbing issue during lunch rush with minimal impact. Lifesavers!',
      image: '👩‍🍳'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="section-badge">Client Reviews</div>
          <h2 className="testimonials-title">
            What Our Clients
            <br />
            <span className="title-gradient">Say About Us</span>
          </h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our plumbing services.
          </p>
        </div>

        <div className="testimonials-showcase">
          <div className="testimonial-main">
            <div className="quote-icon">
              <Quote size={60} />
            </div>
            
            <div className="testimonial-content">
              <div className="stars">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={24} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              
              <p className="testimonial-text">
                "{testimonials[activeTestimonial].text}"
              </p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span className="avatar-emoji">{testimonials[activeTestimonial].image}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonials[activeTestimonial].name}</h4>
                  <p className="author-role">{testimonials[activeTestimonial].role}</p>
                  <p className="author-location">📍 {testimonials[activeTestimonial].location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="card-avatar">
                  <span>{testimonial.image}</span>
                </div>
                <div className="card-content">
                  <h5 className="card-name">{testimonial.name}</h5>
                  <div className="card-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>

        <div className="stats-banner">
          <div className="stat-box">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">2000+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">98%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}