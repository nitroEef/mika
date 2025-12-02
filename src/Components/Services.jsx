import React from 'react';
import { Wrench, Droplets, Flame, Bath, AlertCircle, Settings } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: <AlertCircle size={32} />,
      title: 'Emergency Repairs',
      description: 'Available 24/7 for urgent plumbing emergencies. Fast response time guaranteed.',
      features: ['Burst Pipes', 'Water Leaks', 'Blocked Drains', 'Gas Leaks']
    },
    {
      icon: <Droplets size={32} />,
      title: 'Leak Detection',
      description: 'Advanced technology to locate and repair hidden leaks before they cause damage.',
      features: ['Pipe Inspection', 'Water Testing', 'Pressure Analysis', 'Slab Leaks']
    },
    {
      icon: <Flame size={32} />,
      title: 'Water Heater Service',
      description: 'Installation, repair, and maintenance of all water heater types.',
      features: ['Tank & Tankless', 'Repairs', 'Replacement', 'Maintenance']
    },
    {
      icon: <Bath size={32} />,
      title: 'Bathroom Plumbing',
      description: 'Complete bathroom plumbing solutions from installations to renovations.',
      features: ['Fixture Install', 'Toilet Repair', 'Bath Systems', 'Renovations']
    },
    {
      icon: <Wrench size={32} />,
      title: 'Pipe Installation',
      description: 'Expert pipe installation and replacement for residential and commercial properties.',
      features: ['New Construction', 'Repiping', 'PEX & Copper', 'Sewer Lines']
    },
    {
      icon: <Settings size={32} />,
      title: 'Maintenance Plans',
      description: 'Preventive maintenance to keep your plumbing system running smoothly.',
      features: ['Annual Inspections', 'Drain Cleaning', 'System Testing', 'Priority Service']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <div className="section-badge">Our Services</div>
          <h2 className="services-title">
            Comprehensive Plumbing
            <br />
            <span className="title-gradient">Solutions</span>
          </h2>
          <p className="services-subtitle">
            From routine maintenance to emergency repairs, we handle all your plumbing needs
            with professionalism and expertise.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
                <div className="icon-glow"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
