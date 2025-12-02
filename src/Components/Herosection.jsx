import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaPhone } from "react-icons/fa6";
import { Droplets, Shield, Clock, Award } from "lucide-react";
import "./Herosection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="hero-wrapper">
        <div className="hero-grid">
          
          {/* Left Content */}
          <div className="hero-left">
            <div className="badge-tag">
              <Droplets size={16} />
              <span>Professional Plumbing Services</span>
            </div>

            <h1 className="hero-heading">
              Your Trusted
              <span className="gradient-text"> Plumbing Expert</span>
              <br />
              <span className="sub-heading">Reliable • Fast • Professional</span>
            </h1>

            <p className="hero-description">
              With over 12 years of experience, I deliver top-quality plumbing solutions 
              for homes and businesses. From emergency repairs to complete installations, 
              your satisfaction is guaranteed.
            </p>

            {/* Quick Stats */}
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Done</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                <FaWhatsapp size={20} />
                Book Now via WhatsApp
              </a>
              <a href="tel:+1234567890" className="btn btn-secondary">
                <FaPhone size={18} />
                Call Now
              </a>
            </div>

            {/* Social Links */}
            <div className="social-row">
              <span className="social-label">Follow Us:</span>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                  <FaInstagram />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon">
                  <FaTiktok />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="social-icon">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="hero-right">
            <div className="feature-cards">
              
              {/* Feature Card 1 */}
              <div className="feature-card card-1">
                <div className="card-icon">
                  <Shield size={28} />
                </div>
                <h3>Licensed & Insured</h3>
                <p>Fully certified professional with comprehensive insurance coverage</p>
              </div>

              {/* Feature Card 2 */}
              <div className="feature-card card-2">
                <div className="card-icon">
                  <Clock size={28} />
                </div>
                <h3>24/7 Emergency</h3>
                <p>Round-the-clock availability for urgent plumbing issues</p>
              </div>

              {/* Feature Card 3 */}
              <div className="feature-card card-3">
                <div className="card-icon">
                  <Award size={28} />
                </div>
                <h3>Quality Guaranteed</h3>
                <p>Premium workmanship with warranty on all services</p>
              </div>

              {/* Rotating Badge */}
              <div className="rotating-badge">
                <svg viewBox="0 0 200 200" className="circular-text">
                  <path
                    id="circlePath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    fill="none"
                  />
                  <text className="circle-text">
                    <textPath href="#circlePath">
                      TRUSTED PLUMBER • QUALITY SERVICE • TRUSTED PLUMBER •
                    </textPath>
                  </text>
                </svg>
                <div className="badge-center">
                  <Droplets size={40} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}