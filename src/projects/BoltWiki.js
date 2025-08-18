import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BOLTWikiProject = ({ onNavigate }) => {
  return (
    <div className="project-detail">
      <button className="back-button" onClick={() => onNavigate('home')}>
        <ArrowLeft /> Back to Home
      </button>
      
      <div className="project-hero">
        <div className="container">
          <h1>BOLT VT Wiki</h1>
          <p className="project-lead">
            A comprehensive knowledge management and data repository system serving as the 
            central hub for the VT BOLT electric motorcycle team's technical documentation and collaboration.
          </p>
        </div>
      </div>

      <div className="project-content">
        <div className="container">
          <div className="content-section">
            <div className="text-image-split">
              <div className="text-content">
                <h2>Project Vision</h2>
                <p>
                  The BOLT VT Wiki addresses a critical challenge faced by academic engineering teams: 
                  maintaining institutional knowledge across changing team compositions. As students 
                  graduate and new members join, valuable technical insights and project history 
                  often get lost.
                </p>
                <p>
                  This platform ensures continuity by providing a centralized, searchable repository 
                  where team members can document designs, share insights, and collaborate effectively 
                  on our cutting-edge electric motorcycle project.
                </p>
              </div>
              <div className="image-content">
                <div className="project-image-placeholder">
                  <div className="placeholder-text">Wiki Dashboard Interface</div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>System Architecture</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>React Frontend</h3>
                <p>Modern, responsive user interface built with React featuring intuitive navigation, search functionality, and collaborative editing capabilities.</p>
              </div>
              <div className="feature-card">
                <h3>MongoDB Database</h3>
                <p>Flexible NoSQL database solution optimized for document storage, version control, and efficient retrieval of technical documentation and media files.</p>
              </div>
              <div className="feature-card">
                <h3>RESTful API</h3>
                <p>Well-structured API endpoints enabling seamless communication between frontend and backend with proper authentication and data validation.</p>
              </div>
              <div className="feature-card">
                <h3>Version Control</h3>
                <p>Integrated document versioning system to track changes, maintain edit history, and enable collaborative editing without conflicts.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="text-image-split reverse">
              <div className="image-content">
                <div className="project-image-placeholder">
                  <div className="placeholder-text">System Architecture Diagram</div>
                </div>
              </div>
              <div className="text-content">
                <h2>Technical Implementation</h2>
                <p>
                  The wiki employs a modern full-stack architecture designed for scalability and 
                  performance. The React frontend provides a dynamic, single-page application 
                  experience with component-based architecture for maintainability and reusability.
                </p>
                <p>
                  MongoDB's document-oriented structure perfectly suits the varied content types 
                  including technical specifications, design files, meeting notes, and multimedia 
                  content. Custom indexing strategies ensure fast search and retrieval operations.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="content-section">
            <div className="single-column">
              <h2>Key Features</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>📚 Knowledge Base Organization</h3>
                  <p>Hierarchical organization of technical documentation with categories for each subsystem: powertrain, chassis, controls, and safety systems.</p>
                </div>
                <div className="feature-item">
                  <h3>🔍 Advanced Search</h3>
                  <p>Full-text search capabilities with filtering options by author, date, subsystem, and content type for quick information retrieval.</p>
                </div>
                <div className="feature-item">
                  <h3>👥 Team Collaboration</h3>
                  <p>Multi-user editing support with role-based permissions, comment systems, and real-time collaboration features.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Progress Tracking</h3>
                  <p>Project milestone tracking, task assignment, and progress visualization tools to keep the team aligned and motivated.</p>
                </div>
                <div className="feature-item">
                  <h3>📁 File Management</h3>
                  <p>Integrated file storage and organization system for CAD files, schematics, test data, and multimedia content.</p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="content-section">
            <h2>Development Challenges</h2>
            <div className="challenge-grid">
              <div className="challenge-item">
                <h3>Data Structure Design</h3>
                <p>Creating flexible document schemas that accommodate diverse content types while maintaining query performance and data integrity.</p>
              </div>
              <div className="challenge-item">
                <h3>User Experience</h3>
                <p>Designing an intuitive interface that serves both technical and non-technical team members with varying levels of documentation experience.</p>
              </div>
              <div className="challenge-item">
                <h3>Performance Optimization</h3>
                <p>Implementing efficient caching strategies and database indexing to ensure fast load times even with large documents and media files.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Impact & Results</h2>
            <p>
              Unfortunately the Wiki was never depolyed as the team ended up using canvas to not have to source paryment for hosting, but I gained valuable experience
              with many different web development platforms.
            </p>
          </div>

          <div className="tech-stack">
            <h2>Technologies Used</h2>
            <div className="tech-tags">
              <span className="tech-tag primary">React</span>
              <span className="tech-tag primary">MongoDB</span>
              <span className="tech-tag primary">Node.js</span>
              <span className="tech-tag secondary">JavaScript</span>
              <span className="tech-tag secondary">HTML/CSS</span>
              <span className="tech-tag secondary">Express.js</span>
              <span className="tech-tag secondary">REST APIs</span>
              <span className="tech-tag secondary">Git/GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BOLTWikiProject;