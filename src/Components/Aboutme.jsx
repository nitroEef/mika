import React from 'react';
import { Award, Shield, Users, Clock, CheckCircle, Wrench } from 'lucide-react';

export default function AboutSection() {
  const achievements = [
    { icon: <Award size={24} />, title: '15+ Years', description: 'Industry Experience' },
    { icon: <Users size={24} />, title: '2,000+', description: 'Satisfied Clients' },
    { icon: <Shield size={24} />, title: '100%', description: 'Licensed & Insured' },
    { icon: <Clock size={24} />, title: '24/7', description: 'Emergency Service' }
  ];

  const values = [
    'Expert craftsmanship on every job',
    'Transparent pricing with no hidden fees',
    'Respect for your home and property',
    'On-time service and quick response',
    'Quality parts and lasting solutions',
    'Professional, courteous technicians'
  ];

  return (
    <>
      <style>{`
        .about-section {
          background: #ffffff;
          padding: 120px 0;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-left {
          position: relative;
        }

        .about-image-main {
          width: 100%;
          height: 600px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .experience-badge {
          position: absolute;
          bottom: -30px;
          right: -30px;
          background: #1a1a2e;
          color: #ffffff;
          padding: 40px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .experience-number {
          font-size: 56px;
          font-weight: 700;
          color: #00d4ff;
          line-height: 1;
          margin-bottom: 8px;
        }

        .experience-text {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        .about-right {
          padding-left: 20px;
        }

        .about-label {
          display: inline-block;
          color: #00d4ff;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .about-title {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a2e;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .about-description {
          font-size: 18px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .achievement-card {
          background: #f8f9fa;
          padding: 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid #e9ecef;
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          background: #ffffff;
          border-color: #00d4ff;
          box-shadow: 0 4px 20px rgba(0, 212, 255, 0.1);
        }

        .achievement-icon {
          width: 50px;
          height: 50px;
          background: #00d4ff;
          color: #ffffff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .achievement-content h4 {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 4px;
        }

        .achievement-content p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        .values-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .value-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          color: #333;
        }

        .value-icon {
          color: #00d4ff;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .about-right {
            padding-left: 0;
          }

          .experience-badge {
            bottom: 20px;
            right: 20px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 80px 0;
          }

          .about-container {
            padding: 0 20px;
          }

          .about-title {
            font-size: 36px;
          }

          .about-image-main {
            height: 400px;
          }

          .achievements-grid,
          .values-list {
            grid-template-columns: 1fr;
          }

          .experience-badge {
            position: static;
            margin-top: 20px;
          }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-left">
              <img 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=1000&fit=crop" 
                alt="Professional plumbing team" 
                className="about-image-main"
              />
              <div className="experience-badge">
                <div className="experience-number">15+</div>
                <div className="experience-text">Years of Excellence</div>
              </div>
            </div>

            <div className="about-right">
              <div className="about-label">About Us</div>
              
              <h2 className="about-title">
                Your Trusted Plumbing Partner Since 2008
              </h2>
              
              <p className="about-description">
                We're a family-owned plumbing company committed to delivering exceptional 
                service to our community. With over 15 years of experience, our team of 
                licensed professionals handles everything from routine maintenance to 
                complex installations with precision and care.
              </p>

              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">
                      {achievement.icon}
                    </div>
                    <div className="achievement-content">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="values-list">
                {values.map((value, index) => (
                  <div key={index} className="value-item">
                    <CheckCircle size={20} className="value-icon" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}