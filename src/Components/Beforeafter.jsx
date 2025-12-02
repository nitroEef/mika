import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './Beforeafter.css';

export default function BeforeAfter() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Complete Bathroom Renovation',
      location: 'Los Angeles, CA',
      description: 'Full bathroom remodel including new fixtures, piping, and modern design.',
      category: 'Residential',
      duration: '2 weeks'
    },
    {
      title: 'Emergency Pipe Repair',
      location: 'San Diego, CA',
      description: 'Replaced damaged underground pipes preventing major water damage.',
      category: 'Emergency',
      duration: '24 hours'
    },
    {
      title: 'Kitchen Plumbing Upgrade',
      location: 'Orange County, CA',
      description: 'Modernized kitchen plumbing with new sink, disposal, and water lines.',
      category: 'Residential',
      duration: '1 week'
    },
    {
      title: 'Commercial Building Repiping',
      location: 'Long Beach, CA',
      description: 'Complete repiping of 3-story commercial building with minimal disruption.',
      category: 'Commercial',
      duration: '3 weeks'
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="before-after" id="projects">
      <div className="before-after-container">
        <div className="before-after-header">
          <div className="section-badge">Our Work</div>
          <h2 className="before-after-title">
            Transforming Spaces with
            <br />
            <span className="title-gradient">Expert Craftsmanship</span>
          </h2>
          <p className="before-after-subtitle">
            See the difference quality plumbing makes. Browse our recent projects
            showcasing exceptional workmanship and attention to detail.
          </p>
        </div>

        <div className="projects-showcase">
          <div className="project-main">
            <div className="comparison-container">
              <div className="comparison-side before-side">
                <div className="side-label">Before</div>
                <div className="image-placeholder">
                  <div className="placeholder-icon">📷</div>
                  <p>Original Condition</p>
                </div>
              </div>
              
              <div className="divider-line">
                <div className="divider-circle">
                  <ArrowRight size={24} />
                </div>
              </div>

              <div className="comparison-side after-side">
                <div className="side-label">After</div>
                <div className="image-placeholder">
                  <div className="placeholder-icon">✨</div>
                  <p>Completed Work</p>
                </div>
              </div>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">{projects[activeProject].category}</span>
                <span className="project-duration">⏱️ {projects[activeProject].duration}</span>
              </div>
              <h3 className="project-title">{projects[activeProject].title}</h3>
              <p className="project-location">📍 {projects[activeProject].location}</p>
              <p className="project-description">{projects[activeProject].description}</p>
            </div>
          </div>

          <div className="project-navigation">
            <button className="nav-btn" onClick={prevProject}>
              <ChevronLeft size={24} />
            </button>
            
            <div className="project-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeProject ? 'active' : ''}`}
                  onClick={() => setActiveProject(index)}
                />
              ))}
            </div>

            <button className="nav-btn" onClick={nextProject}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="project-thumbnails">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`thumbnail ${index === activeProject ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <div className="thumbnail-overlay">
                  <span className="thumbnail-title">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}